import { nextTick, ref } from 'vue';
import type { Ref, ComputedRef } from 'vue';
import { useDebounceFn } from '@vueuse/core';

import type { RwCarouselProps } from './types';

interface Data {
  scrollerElementRef: Ref<HTMLDivElement | undefined>,
  props: RwCarouselProps,
  itemElementWidth: ComputedRef<number>,
  slidesKeys: Ref<string[]>,
}

interface ScrollToData {
  offsetWidth: number,
  scrollPosition: number,
  contentWidth: number,
}

export function useScroll({
  scrollerElementRef, props, itemElementWidth, slidesKeys,
}: Data) {
  // TODO: fix infinite scrolling
  const firstVisibleSlideKey = ref('');
  const visibleSlidesKeys = ref<string[]>([]);
  const isScrollEnd = ref(false);
  const prevScrollPosition = ref(0);
  const isProgramScroll = ref(false);

  const mockSlides = ref(new Array(slidesKeys.value.length));
  const visibleMockSlidesKeys = ref<string[]>([]);

  function setOverflow(value: string) {
    if (!scrollerElementRef.value) {
      return;
    }

    if (props.vertical) {
      scrollerElementRef.value.style.overflowY = value;
    } else {
      scrollerElementRef.value.style.overflowX = value;
    }
  }

  function scrollToSlideByKey(slideKey: string) {
    if (!scrollerElementRef.value) {
      return;
    }

    isProgramScroll.value = true;

    const slideElement = scrollerElementRef.value.querySelector(`.rw-carousel-item[data-slide='${slideKey}']`);

    slideElement?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });

    setTimeout(() => {
      isProgramScroll.value = false;
    }, 1000);
  }

  function detectVisibleMockSlides() {
    if (!scrollerElementRef.value) {
      return;
    }

    const slideElements = [...scrollerElementRef.value.querySelectorAll<HTMLElement>('.rw-carousel-item-mock[data-visible="true"]')];

    visibleMockSlidesKeys.value = slideElements.map((slideElement) => slideElement.dataset.slide as string);
  }

  function detectVisibleSlides() {
    if (!scrollerElementRef.value) {
      return;
    }

    const slideElements = [...scrollerElementRef.value.querySelectorAll<HTMLElement>('.rw-carousel-item[data-visible="true"]')];

    visibleSlidesKeys.value = slideElements.map((slideElement) => slideElement.dataset.slide as string);

    mockSlides.value = new Array(Math.ceil(visibleSlidesKeys.value.length / 2));
  }

  const detectFirstVisibleSlide = useDebounceFn(() => {
    if (!scrollerElementRef.value) {
      return;
    }

    detectVisibleSlides();
    detectVisibleMockSlides();

    const middleIndex = Math.floor((visibleSlidesKeys.value.length - 1) / 2);

    const isFirstSlideVisible = visibleSlidesKeys.value.length && slidesKeys.value[0] === visibleSlidesKeys.value[0];
    const isLastSlideVisible = visibleSlidesKeys.value.length && slidesKeys.value[slidesKeys.value.length - 1] === visibleSlidesKeys.value[visibleSlidesKeys.value.length - 1];

    const mockSlidesVisible = mockSlides.value.length === visibleMockSlidesKeys.value.length;

    let slideKey = '';

    if (isFirstSlideVisible && mockSlidesVisible) {
      slideKey = slidesKeys.value[0];
    } else if (isLastSlideVisible && mockSlidesVisible) {
      slideKey = slidesKeys.value[slidesKeys.value.length - 1];
    } else {
      slideKey = visibleSlidesKeys.value[middleIndex] || '';
    }

    firstVisibleSlideKey.value = slideKey || '';

    // firstVisibleSlideKey.value = visibleSlidesKeys.value[middleIndex] || '';
  }, 200);

  function scrollTo(top: number, left: number) {
    if (!scrollerElementRef.value) {
      return;
    }

    setOverflow('hidden');
    scrollerElementRef.value.style.scrollBehavior = 'auto';

    scrollerElementRef.value.scroll({
      top, left,
    });

    setTimeout(() => {
      if (scrollerElementRef.value) {
        setOverflow('auto');
        scrollerElementRef.value.style.scrollBehavior = 'smooth';
      }
    }, 10);
  }

  async function scroll(data: ScrollToData) {
    if (!scrollerElementRef.value) {
      return;
    }

    const width = data.offsetWidth + data.scrollPosition;

    const endWidth = data.contentWidth - itemElementWidth.value;

    isScrollEnd.value = width >= endWidth;

    if (props.infinite && isScrollEnd.value) {
      scrollerElementRef.value.style.scrollBehavior = 'auto';
    }

    await nextTick();

    if (!isProgramScroll.value && props.infinite && !data.scrollPosition) {
      const top = props.vertical
        ? data.contentWidth - data.offsetWidth - 50
        : 0;

      const left = props.vertical
        ? 0
        : data.contentWidth - data.offsetWidth - itemElementWidth.value;

      scrollTo(top, left);
    } else if (!isProgramScroll.value && props.infinite && width >= data.contentWidth && width > prevScrollPosition.value) {
      scrollTo(10, 10);
    }

    prevScrollPosition.value = data.scrollPosition;
  }

  async function onScrollEvent() {
    if (!scrollerElementRef.value) {
      return;
    }

    const data = props.vertical ? {
      offsetWidth: scrollerElementRef.value.offsetHeight,
      scrollPosition: scrollerElementRef.value.scrollTop,
      contentWidth: scrollerElementRef.value.scrollHeight,
    } : {
      offsetWidth: scrollerElementRef.value.offsetWidth,
      scrollPosition: scrollerElementRef.value.scrollLeft,
      contentWidth: scrollerElementRef.value.scrollWidth,
    };

    await scroll(data);

    detectFirstVisibleSlide();
  }

  return {
    onScrollEvent, scrollToSlideByKey, firstVisibleSlideKey, visibleSlidesKeys, detectFirstVisibleSlide, mockSlides, visibleMockSlidesKeys,
  };
}

import { nextTick } from 'vue';
import type { Ref, ComputedRef } from 'vue';
import type { RwCarouselProps } from './types';

interface Data {
  scrollerElementRef: Ref<HTMLDivElement | undefined>,
  props: RwCarouselProps,
  itemElementWidth: ComputedRef<number>,
  isScrollEnd: Ref<boolean>,
}

interface ScrollToData {
  offsetWidth: number,
  scrollPosition: number,
  contentWidth: number,
}

export function useScroll({
  scrollerElementRef, props, itemElementWidth, isScrollEnd,
}: Data) {
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

    scrollerElementRef.value
      .querySelector(`.rw-carousel-item[data-slide='${slideKey}']`)
      ?.scrollIntoView({
        behavior: 'smooth',
      });
  }

  function scrollTo(top: number, left: number) {
    if (!scrollerElementRef.value) {
      return;
    }

    setOverflow('hidden');
    scrollerElementRef.value.style.scrollBehavior = 'auto';

    scrollerElementRef.value.scroll({
      top,
      left,
    });

    setTimeout(() => {
      if (scrollerElementRef.value) {
        setOverflow('auto');
        scrollerElementRef.value.style.scrollBehavior = 'smooth';
      }
    }, 50);
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

    // If last slide to next
    if (props.infinite && !data.scrollPosition) {
      const top = props.vertical
        ? data.contentWidth - itemElementWidth.value
        : 0;

      const left = props.vertical
        ? 0
        : data.contentWidth - data.offsetWidth - itemElementWidth.value;

      scrollTo(top, left);
    } else if (props.infinite && width >= data.contentWidth) {
      scrollTo(0, 0);
    }
  }

  async function onScrollEvent() {
    if (!scrollerElementRef.value) {
      return;
    }

    if (props.vertical) {
      await scroll({
        offsetWidth: scrollerElementRef.value.offsetHeight,
        scrollPosition: scrollerElementRef.value.scrollTop,
        contentWidth: scrollerElementRef.value.scrollHeight,
      });
    } else {
      await scroll({
        offsetWidth: scrollerElementRef.value.offsetWidth,
        scrollPosition: scrollerElementRef.value.scrollLeft,
        contentWidth: scrollerElementRef.value.scrollWidth,
      });
    }
  }

  return { onScrollEvent, scrollToSlideByKey };
}

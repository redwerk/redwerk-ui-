import { ref } from 'vue';
import type { Ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import type { RwCarouselProps } from './types';

interface Data {
  props: RwCarouselProps,
  scrollerElementRef: Ref<HTMLDivElement | undefined>
}

export function useLastSlideIntersection({ scrollerElementRef, props }: Data) {
  const copiedFirstRef = ref<HTMLDivElement>();

  const copiedFirstRefIntersection = ref();

  function registerRef(instance: HTMLDivElement) {
    copiedFirstRef.value = instance;
  }

  function startIntersection() {
    if (copiedFirstRefIntersection.value) {
      copiedFirstRefIntersection.value.stop();
    }

    if (props.infinite) {
      copiedFirstRefIntersection.value = useIntersectionObserver(
        copiedFirstRef,
        ([{ isIntersecting }]) => {
          if (!isIntersecting || !scrollerElementRef.value) {
            return;
          }

          const slides = scrollerElementRef.value.querySelectorAll('.rw-carousel-item');

          if (copiedFirstRef.value) {
            copiedFirstRef.value.innerHTML = slides[0].innerHTML;
            copiedFirstRef.value.classList.remove(...copiedFirstRef.value.classList);
            copiedFirstRef.value.classList.add(...slides[0].classList);
          }
        },
      );
    }
  }

  function stopIntersection() {
    if (copiedFirstRefIntersection.value) {
      copiedFirstRefIntersection.value.stop();
    }
  }

  return {
    startIntersection,
    registerRef,
    stopIntersection,
  };
}

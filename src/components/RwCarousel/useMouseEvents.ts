import type { Ref } from 'vue';
import { reactive, ref } from 'vue';
import type { RwCarouselProps } from './types';

interface Params {
  props: RwCarouselProps,
  scrollerElementRef: Ref<HTMLDivElement | undefined>,
}

export function useMouseEvents({ scrollerElementRef, props }: Params) {
  const currentPosition = reactive({
    top: 0, left: 0, x: 0, y: 0,
  });

  const isFocused = ref(false);

  function onMouseMove(event: MouseEvent) {
    if (!props.scrollByDrag || !isFocused.value || !scrollerElementRef.value) {
      return;
    }

    // How far the mouse has been moved
    const dx = event.clientX - currentPosition.x;
    const dy = event.clientY - currentPosition.y;

    // Scroll the element
    scrollerElementRef.value.scrollTop = currentPosition.top - dy;
    scrollerElementRef.value.scrollLeft = currentPosition.left - dx;
  }

  function onMouseUp() {
    if (!props.scrollByDrag || !scrollerElementRef.value) {
      return;
    }

    scrollerElementRef.value.style.cursor = 'grab';
    scrollerElementRef.value.style.removeProperty('user-select');

    scrollerElementRef.value.style.scrollSnapType = props.vertical ? 'y mandatory' : 'x mandatory';
    scrollerElementRef.value.style.scrollBehavior = 'smooth';

    isFocused.value = false;
  }

  function onMouseDown(event: MouseEvent) {
    if (!props.scrollByDrag || !scrollerElementRef.value) {
      return;
    }

    currentPosition.left = scrollerElementRef.value.scrollLeft;
    currentPosition.top = scrollerElementRef.value.scrollTop;
    currentPosition.x = event.clientX;
    currentPosition.y = event.clientY;

    scrollerElementRef.value.style.cursor = 'grabbing';
    scrollerElementRef.value.style.userSelect = 'none';

    scrollerElementRef.value.style.scrollSnapType = 'none';
    scrollerElementRef.value.style.scrollBehavior = 'auto';

    isFocused.value = true;
  }

  return { onMouseMove, onMouseUp, onMouseDown };
}

import { ref } from 'vue';
import type { RwCarouselAutoplayOptions, RwCarouselProps } from './types';

type SetInterval = ReturnType<typeof setInterval>;

const DEFAULT_OPTIONS: RwCarouselAutoplayOptions = {
  pauseOnHover: true,
  delay: 5000,
};

interface Params {
  props: RwCarouselProps,
  nextSlideFn: () => void,
  prevSlideFn: () => void,
}
export function useAutoplay(params: Params) {
  const changeInterval = ref<SetInterval>();

  const currentIntervalTime = ref(0);

  function getOptions() {
    const options: RwCarouselAutoplayOptions = { ...DEFAULT_OPTIONS };

    if (typeof params.props.autoplay === 'object') {
      options.delay = params.props.autoplay.delay ?? options.delay;
      options.pauseOnHover = params.props.autoplay.pauseOnHover ?? options.pauseOnHover;
    }

    return options;
  }

  function startAutoplay() {
    if (!params.props.autoplay) {
      return;
    }

    const options = getOptions();

    changeInterval.value = setInterval(() => {}, options.delay);
  }

  function stopAutoplay() {
    if (changeInterval.value) {
      clearInterval(changeInterval.value);
    }

    changeInterval.value = undefined;
  }

  return {
    startAutoplay,
    stopAutoplay,
  };
}

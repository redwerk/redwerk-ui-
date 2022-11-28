<script setup lang="ts">
import {
  computed, onBeforeUnmount, onMounted, ref, useSlots,
} from 'vue';

import { useAutoplay } from './useAutoplay';
import RwIcon from '../RwIcon/RwIcon.vue';

import { useScroll } from './useScroll';
import { useLastSlideIntersection } from './useSlideIntersection';
import type { RwCarouselAutoplayOptions } from './types';
import { RwCarouselSlots } from './types';

const props = defineProps<{
  vertical?: boolean,
  infinite?: boolean,
  showScroll?: boolean,
  autoplay?: boolean | RwCarouselAutoplayOptions,
}>();

const scrollerElementRef = ref<HTMLDivElement>();

const isScrollEnd = ref(false);

const itemElementWidth = computed(() => {
  if (typeof window === 'undefined' || !scrollerElementRef.value) {
    return 0;
  }

  const width = props.vertical
    ? scrollerElementRef.value.querySelector('.rw-carousel-item')?.clientHeight
    : scrollerElementRef.value.querySelector('.rw-carousel-item')?.clientWidth;

  return width || 0;
});

function next() {
  if (props.vertical) {
    scrollerElementRef.value?.scrollBy(0, itemElementWidth.value);
  } else {
    scrollerElementRef.value?.scrollBy(itemElementWidth.value, 0);
  }
}

function previous() {
  if (props.vertical) {
    scrollerElementRef.value?.scrollBy(0, -itemElementWidth.value);
  } else {
    scrollerElementRef.value?.scrollBy(-itemElementWidth.value, 0);
  }
}

const carouselScroll = useScroll({
  props,
  isScrollEnd,
  itemElementWidth,
  scrollerElementRef,
});

const lastSlide = useLastSlideIntersection({ props, scrollerElementRef });

const autoplay = useAutoplay({
  props,
  nextSlideFn: next,
  prevSlideFn: previous,
});

const scrollerStyle = computed(() => {
  if (props.vertical) {
    return {
      width: '100%',
      maxHeight: `${itemElementWidth.value}px`,
    };
  }

  return {
    // maxWidth: `${itemElementWidth.value}px`,
  };
});

const slots = useSlots() as unknown as RwCarouselSlots;

const slidesKeys = computed(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const nodes = slots?.default() || [];

  if (!nodes.length) {
    return [];
  }

  const nodeWithSlides = nodes[0].children as any[] || [];

  return nodeWithSlides.map((child) => `slide-${child.key}`);
});

onMounted(() => {
  autoplay.startAutoplay();

  scrollerElementRef.value?.addEventListener('scroll', carouselScroll.onScrollEvent);

  lastSlide.startIntersection();
});

onBeforeUnmount(() => {
  autoplay.stopAutoplay();

  scrollerElementRef.value?.removeEventListener('scroll', carouselScroll.onScrollEvent);

  lastSlide.stopIntersection();
});

defineExpose({ next, previous });
</script>

<template>
  <div class="rw-carousel">
    <div
      :class="[
        'rw-carousel__scroller',
        {
          vertical,
          'hide-scrollbar': !showScroll,
        },
      ]"
      :style="scrollerStyle"
      ref="scrollerElementRef"
    >
      <slot />

      <div
        v-if="!vertical && infinite"
        class="rw-carousel-item"
        :ref="lastSlide.registerRef"
        :style="{ width: `${itemElementWidth}px` }"
      />
    </div>

    <div class="rw-carousel__btn prev">
      <slot
        name="prevButtonSlot"
        :click="previous"
      >
        <button
          type="button"
          @click="previous"
        >
          <RwIcon name="mdi:chevron-left" />
        </button>
      </slot>
    </div>

    <div class="rw-carousel__btn next">
      <slot
        name="nextButtonSlot"
        :click="next"
      >
        <button
          type="button"
          @click="next"
        >
          <RwIcon name="mdi:chevron-right" />
        </button>
      </slot>
    </div>

    <div class="rw-carousel__bottom">
      <slot
        name="bottom"
        :previous="previous"
        :next="next"
        :scroll-to="carouselScroll.scrollToSlideByKey"
        :slides-keys="slidesKeys"
      >
        <div class="dots">
          <template
            v-for="(key, index) in slidesKeys"
            :key="key"
          >
            <slot
              name="dot"
              :slide-number="index + 1"
            >
              <button
                class="dot"
                type="button"
                @click="carouselScroll.scrollToSlideByKey(key)"
              />
            </slot>
          </template>
        </div>
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
.rw-carousel {
  position: relative;
  padding: 0 10px;

  &__scroller {
    /* snap mandatory on horizontal axis  */
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    overflow-x: auto;
    overflow-y: hidden;

    display: flex;
    align-items: center;

    /* Enable Safari touch scrolling physics */
    -webkit-overflow-scrolling: touch;

    padding-bottom: 10px;

    .rw-carousel-item {
      /* snap align center  */
      scroll-snap-align: start;
      scroll-snap-stop: always;
      position: relative;

      &:last-of-type {
        padding-right: 20px;
      }
    }

    &.vertical {
      scroll-snap-type: y mandatory;

      overflow-x: hidden;
      overflow-y: auto;
      flex-direction: column;
    }

    &.hide-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  &__btn {
    position: absolute;

    top: 50%;
    transform: translateY(-50%);

    height: 30px;
    width: 30px;

    border-radius: 2px;
    background-color: rgba(0,0,0,0.5);
    background-position: 50% 50%;
    background-repeat: no-repeat;

    z-index: 1;

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
  }

  &_bottom {
    margin-top: 10px;

    .dots {
      display: flex;
      justify-content: center;
      align-items: center;

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgba(0,0,0,0.5);
      }
    }
  }
}
</style>

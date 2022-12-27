<script setup lang="ts">
import {
  computed, onBeforeUnmount, onMounted, ref, useSlots,
} from 'vue';

import RwCarouselItemMock from './RwCarouselItemMock.vue';
import { useAutoplay } from './useAutoplay';
import { RwIcon } from '../index';

import { useScroll } from './useScroll';
import { useLastSlideIntersection } from './useSlideIntersection';
import type { RwCarouselAutoplayOptions, RwCarouselSlots } from './types';
import { useMouseEvents } from './useMouseEvents';

const props = withDefaults(defineProps<{
  vertical?: boolean,
  infinite?: boolean,
  showScroll?: boolean,
  autoplay?: boolean | RwCarouselAutoplayOptions,
  maxVisible?: number,
  notVisibleOffset?: string,
  showDots?: boolean,
  showButtons?: boolean,
  scrollByDrag?: boolean,
  showMockSlides?: boolean,
}>(), {
  vertical: false,
  infinite: false,
  showScroll: false,
  autoplay: false,
  maxVisible: undefined,
  notVisibleOffset: undefined,
  showDots: true,
  showButtons: true,
  scrollByDrag: true,
  showMockSlides: false,
});

const scrollerElementRef = ref<HTMLDivElement>();

const itemElementWidth = computed(() => {
  if (typeof window === 'undefined' || !scrollerElementRef.value) {
    return 0;
  }

  const width = props.vertical
    ? scrollerElementRef.value.querySelector('.rw-carousel-item')?.clientHeight
    : scrollerElementRef.value.querySelector('.rw-carousel-item')?.clientWidth;

  return width || 0;
});

const slots = useSlots() as unknown as RwCarouselSlots;

const slidesKeys = computed(() => {
  const nodes = slots?.default({ activeItemIndex: 0 }) || [];

  if (!nodes.length) {
    return [];
  }

  const nodeWithSlides = nodes[0].children as any[] || [];

  return nodeWithSlides.map((child) => `slide-${child.key}`);
});

const slideStyles = computed(() => {
  if (props.vertical) {
    return {
      height: `${itemElementWidth.value}px`,
    };
  }

  return {
    width: `${itemElementWidth.value}px`,
  };
});

const carouselScroll = useScroll({
  props,
  itemElementWidth,
  scrollerElementRef,
  slidesKeys,
});

const activeItemIndex = computed(() => slidesKeys.value.findIndex((key) => carouselScroll.firstVisibleSlideKey.value === key));

const lastSlide = useLastSlideIntersection({ props, scrollerElementRef });

function next() {
  const offset = carouselScroll.visibleSlidesKeys.value.length === 1
    ? itemElementWidth.value + (itemElementWidth.value / 3)
    : itemElementWidth.value;

  if (props.vertical) {
    scrollerElementRef.value?.scrollBy(0, offset);
  } else {
    scrollerElementRef.value?.scrollBy(offset, 0);
  }
}

function previous() {
  const offset = carouselScroll.visibleSlidesKeys.value.length === 1
    ? itemElementWidth.value + (itemElementWidth.value / 3)
    : itemElementWidth.value;

  if (props.vertical) {
    scrollerElementRef.value?.scrollBy(0, -offset);
  } else {
    scrollerElementRef.value?.scrollBy(-offset, 0);
  }
}

const autoplay = useAutoplay({
  props,
  nextSlideFn: next,
  prevSlideFn: previous,
});

const mouseEvents = useMouseEvents({ props, scrollerElementRef });

const scrollerStyle = computed(() => {
  const offset = props.notVisibleOffset || '0px';
  const gridStyle = props.maxVisible ? `calc((100% / ${props.maxVisible}) - ${offset})` : 'auto';
  const cursor = props.scrollByDrag ? 'grab' : 'auto';

  if (props.vertical) {
    return {
      width: '100%',
      gridAutoRows: gridStyle,
      cursor,
    };
  }

  return {
    gridAutoColumns: gridStyle,
    cursor,
  };
});

onMounted(() => {
  autoplay.startAutoplay();

  scrollerElementRef.value?.addEventListener('scroll', carouselScroll.onScrollEvent);

  carouselScroll.detectFirstVisibleSlide();

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
  <div
    :class="[
      'rw-carousel',
      {
        vertical,
        'hide-scrollbar': !showScroll,
      },
    ]"
  >
    <div class="rw-carousel__container">
      <div
        class="scroller"
        :style="scrollerStyle"
        ref="scrollerElementRef"
        @mousemove="mouseEvents.onMouseMove"
        @mouseup="mouseEvents.onMouseUp"
        @mousedown="mouseEvents.onMouseDown"
        @mouseout="mouseEvents.onMouseUp"
      >
        <template v-if="showMockSlides">
          <RwCarouselItemMock
            v-for="(_, index) in carouselScroll.mockSlides.value"
            :key="index"
            :style="slideStyles"
          />
        </template>

        <slot :active-item-index="activeItemIndex" />

        <div
          v-if="infinite && carouselScroll.visibleSlidesKeys.value.length > 1"
          class="rw-carousel-item"
          :ref="lastSlide.registerRef"
        />

        <template v-if="showMockSlides">
          <RwCarouselItemMock
            v-for="(_, index) in carouselScroll.mockSlides.value"
            :key="index"
            :style="slideStyles"
          />
        </template>
      </div>

      <template v-if="showButtons">
        <div class="btn prev">
          <slot
            name="prevButtonSlot"
            :click="previous"
          >
            <button
              type="button"
              title="Previous slide"
              @click="previous"
            >
              <RwIcon name="mdi:chevron-left" />
            </button>
          </slot>
        </div>

        <div class="btn next">
          <slot
            name="nextButtonSlot"
            :click="next"
          >
            <button
              type="button"
              title="Next slide"
              @click="next"
            >
              <RwIcon name="mdi:chevron-right" />
            </button>
          </slot>
        </div>
      </template>
    </div>

    <div class="rw-carousel__bottom">
      <slot
        name="bottomSlot"
        :previous="previous"
        :next="next"
        :scroll-to="carouselScroll.scrollToSlideByKey"
        :slides-keys="slidesKeys"
        :active-slide-key="carouselScroll.firstVisibleSlideKey.value"
      >
        <div
          v-if="showDots"
          class="dots"
        >
          <template
            v-for="(key, index) in slidesKeys"
            :key="key"
          >
            <slot
              name="dotSlot"
              :slide-number="index + 1"
              :slide-key="key"
              :click="() => carouselScroll.scrollToSlideByKey(key)"
              :active="key === carouselScroll.firstVisibleSlideKey.value"
            >
              <button
                :class="[
                  'dots__item',
                  {
                    active: key === carouselScroll.firstVisibleSlideKey.value,
                  },
                ]"
                type="button"
                :title="`Slide #${index + 1}`"
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
  &__container {
    position: relative;

    .scroller {
      /* snap mandatory on horizontal axis  */
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      scroll-padding: 100px;

      overflow-x: auto;
      overflow-y: hidden;

      display: grid;
      grid-auto-flow: column;

      /* Enable Safari touch scrolling physics */
      -webkit-overflow-scrolling: touch;

      padding-bottom: 10px;

      .rw-carousel-item {
        /* snap align center  */
        scroll-snap-align: center;
        scroll-snap-stop: always;
        position: relative;

        &:first-of-type {
          scroll-snap-align: start;
        }

        &:last-of-type {
          scroll-snap-align: end;
        }
      }
    }

    .btn {
      position: absolute;

      top: 50%;
      transform: translateY(-50%);

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
  }

  &__bottom {
    margin-top: 10px;

    .dots {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;

      &__item {
        cursor: pointer;
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 50%;
        background: lightgray;

        &.active {
          background: lightgreen;
        }
      }
    }
  }

  &.vertical {
    .scroller {
      scroll-snap-type: y mandatory;
      overflow-x: hidden;
      overflow-y: auto;
      grid-auto-flow: row;
    }
  }

  &.hide-scrollbar {
    .scroller {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>

<script setup lang="ts">

import {
  computed, nextTick, onBeforeMount, onMounted, ref, watch,
} from 'vue';
import { useDebounceFn } from '@vueuse/core';
import RwCarouselItem from './RwCarouselItem.vue';
import RwCarouselItemMock from './RwCarouselItemMock.vue';
import { RwCarouselAutoplayOptions } from './types';

type RwCarouselItemRef = InstanceType<typeof RwCarouselItem>;

const props = withDefaults(defineProps<{
  items: unknown[],
  vertical?: boolean,
  infinite?: boolean,
  showScroll?: boolean,
  autoplay?: boolean | RwCarouselAutoplayOptions,
  maxVisible?: number,
  notVisibleOffset?: string,
  showDots?: boolean,
  showButtons?: boolean,
  scrollByDrag?: boolean,
  centered?: boolean,
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
  centered: false,
});

const slidesRef = ref<RwCarouselItemRef[]>();
const scrollerElementRef = ref<HTMLDivElement>();

const orderedSlides = ref<{ itemIndex: number, isCopy: boolean }[]>([]);

const visibleSlides = ref<Record<number, boolean>>({});
const visibleItemsCountWithoutMocks = ref(0);

const mocksCount = ref(0);

const loading = ref(true);
const mocksLoading = ref(true);
const leftVisibleMocks = ref<Record<number, boolean>>({});
const rightVisibleMocks = ref<Record<number, boolean>>({});
const itemWidth = ref(0);
const isFirstSlideVisible = computed(() => Boolean(visibleSlides.value[0]));
const isLastSlideVisible = computed(() => Boolean(visibleSlides.value[props.items.length - 1]));

const focusedSlideIndex = ref();

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

const slideStyle = computed(() => {
  if (props.vertical) {
    return {
      height: `${itemWidth.value}px`,
    };
  }

  return {
    width: `${itemWidth.value}px`,
  };
});

function setSlideVisibility(data: { visible: boolean, index: number, isCopy: boolean }) {
  if (loading.value && data.isCopy) {
    return;
  }

  if (data.visible) {
    visibleSlides.value[data.index] = true;
  } else {
    delete visibleSlides.value[data.index];
  }
}

function setMockVisibility(data: { visible: boolean, index: number, position: 'left' | 'right' }) {
  if (data.visible) {
    if (data.position === 'left') {
      leftVisibleMocks.value[data.index] = true;
    } else {
      rightVisibleMocks.value[data.index] = true;
    }
  } else if (data.position === 'left') {
    delete leftVisibleMocks.value[data.index];
  } else {
    delete rightVisibleMocks.value[data.index];
  }
}

const calculateMocksCount = () => {
  if (loading.value) {
    mocksCount.value = Math.floor(visibleItemsCountWithoutMocks.value / 2);
  }

  mocksLoading.value = false;
};

const detectFocusedSlide = useDebounceFn(async ({ leftMocks, visibleItems, rightMocks }: any) => {
  const result: { visible: boolean, type: string, index: number }[] = [];

  calculateMocksCount();

  if (Object.keys(leftMocks).length) {
    for (let i = 0; i < mocksCount.value; i += 1) {
      result.push({
        index: i,
        type: 'mock',
        visible: leftMocks[i],
      });
    }
  }

  props.items.forEach((item, index) => result.push({
    index: Number(index),
    type: 'slide',
    visible: visibleItems[index],
  }));

  if (Object.keys(rightMocks).length) {
    for (let i = 0; i < mocksCount.value; i += 1) {
      result.push({
        index: i,
        type: 'mock',
        visible: rightMocks[i],
      });
    }
  }

  const visible = result.filter((item) => item.visible);

  if (visible.length) {
    let visibleSlideIndex = Math.ceil(visible.length / 2);

    while (visible[visibleSlideIndex].type !== 'slide') {
      visibleSlideIndex += 1;
    }

    focusedSlideIndex.value = visible[visibleSlideIndex].index;
  }

  if (loading.value) {
    await nextTick();

    if (slidesRef.value?.length) {
      const index = orderedSlides.value.findIndex((item) => item.itemIndex === 0 && !item.isCopy);

      if (index > -1) {
        slidesRef.value[index].$el.scrollIntoView({ block: 'start', inline: 'start' });
      }
    }
  }

  loading.value = false;
}, 200);

const calculateOrderedSlides = () => {
  let slidesArray = props.items.map((item, itemIndex) => ({
    itemIndex,
    isCopy: false,
  }));

  if (!props.centered && props.infinite) {
    if (loading.value || isFirstSlideVisible.value) {
      slidesArray = [
        ...slidesArray.map((slide) => ({ ...slide, isCopy: true })),
        ...slidesArray,
      ];
    }
  }

  orderedSlides.value = slidesArray;
};

onBeforeMount(() => {
  calculateOrderedSlides();
});

onMounted(() => {
  if (slidesRef.value?.length) {
    itemWidth.value = props.vertical
      ? slidesRef.value[0].$el.clientHeight
      : slidesRef.value[0].$el.clientWidth;

    visibleItemsCountWithoutMocks.value = props.vertical
      ? Math.floor(window.innerHeight / itemWidth.value)
      : Math.floor(window.innerWidth / itemWidth.value);

    detectFocusedSlide({
      leftMocks: leftVisibleMocks.value,
      visibleItems: visibleSlides.value,
      rightMocks: rightVisibleMocks.value,
    });
  }
});

watch(
  () => [leftVisibleMocks.value, visibleSlides.value, rightVisibleMocks.value],
  ([leftMocks, visibleItems, rightMocks]) => {
    calculateOrderedSlides();

    detectFocusedSlide({ leftMocks, visibleItems, rightMocks });
  },
  { deep: true, flush: 'post' },
);
</script>

<template>
  <div
    :class="[
      'rw-carousel',
      {
        vertical,
        'hide-scrollbar': !showScroll,
        loading,
        centered,
      },
    ]"
  >
    <div class="rw-carousel__container">
      <div
        class="scroller"
        ref="scrollerElementRef"
        :style="scrollerStyle"
      >
        <template v-if="!mocksLoading && centered && mocksCount">
          <RwCarouselItemMock
            v-for="index in mocksCount"
            :key="index"
            :style="slideStyle"
            @visibility-change="(visible) => setMockVisibility({ visible, index, position: 'left' })"
          />
        </template>

        <RwCarouselItem
          v-for="item in orderedSlides"
          :key="item.itemIndex"
          ref="slidesRef"
          @visibility-change="(visible) => setSlideVisibility({ visible, index: item.itemIndex, isCopy: item.isCopy })"
        >
          <slot
            name="itemSlot"
            :item="items[item.itemIndex]"
            :index="item.itemIndex"
            :active="item.itemIndex === focusedSlideIndex"
          />
        </RwCarouselItem>

        <template v-if="!mocksLoading && centered && mocksCount">
          <RwCarouselItemMock
            v-for="index in mocksCount"
            :key="index"
            :style="slideStyle"
            @visibility-change="(visible) => setMockVisibility({ visible, index, position: 'right' })"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.rw-carousel {
  transition: opacity 0.5s ease-in;

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
        scroll-snap-stop: normal;
        position: relative;

        &:first-of-type {
          scroll-snap-align: start;
        }

        &:last-of-type {
          scroll-snap-align: end;
        }
      }

      .rw-carousel-item-mock {
        scroll-snap-align: start;
        scroll-snap-stop: normal;
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

  &.loading {
    opacity: 0;

    .scroller {
      scroll-behavior: unset;
    }
  }

  &.centered {
    .rw-carousel-item {
      /* snap align center  */
      scroll-snap-align: start;
      scroll-snap-stop: normal;
      position: relative;
    }
  }
}
</style>

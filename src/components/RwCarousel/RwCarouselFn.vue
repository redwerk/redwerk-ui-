<script  lang="ts">
import {
  computed, h, onBeforeMount, onBeforeUnmount, onMounted, ref,
} from 'vue';
import { useScroll } from './useScroll';
import { useLastSlideIntersection } from './useSlideIntersection';
import { useAutoplay } from './useAutoplay';
import RwIcon from '../RwIcon/RwIcon.vue';
import type { RwCarouselProps, RwCarouselSlots } from './types';

export default {
  name: 'RwCarousel',
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
    infinite: {
      type: Boolean,
      default: false,
    },
    showScroll: {
      type: Boolean,
      default: false,
    },
    autoplay: {
      type: [Boolean, Object],
      default: false,
    },
  },
  setup(
    props: RwCarouselProps,
    { slots, expose }: {
      slots: RwCarouselSlots,
      expose: any
    },
  ) {
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

    const slidesCount = computed(() => {
      const nodes = slots.default();
      if (!nodes.length) {
        return 0;
      }

      return nodes[0].children?.length || 0;
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

    // Template
    const slidesContainerNode = h(
      'div',
      {
        class: [
          'rw-carousel__scroller',
          {
            vertical: props.vertical,
            'hide-scrollbar': !props.showScroll,
          },
        ],
        style: scrollerStyle.value,
        ref: scrollerElementRef.value,
      },
      slots.default(),
    );

    const lastSlideNode = !props.vertical && props.infinite
      ? h(
        'div',
        {
          class: 'rw-carousel-item',
        },
      ) : null;

    const btnDefaultSlotValueNode = (params: {
      icon: string,
      click: () => void
    }) => h('button', { onClick: params.click }, [
      h(RwIcon, { name: params.icon }),
    ]);

    const btnNode = (params: {
      slotName: keyof RwCarouselSlots,
      click: () => void,
      icon: string,
      classes: string[],
    }) => h(
      'div',
      {
        class: [
          'rw-carousel__btn',
          ...params.classes,
        ],
      },
      slots[params.slotName]?.({ click: params.click }) ?? btnDefaultSlotValueNode({
        icon: params.icon,
        click: params.click,
      }),
    );

    onBeforeMount(() => {
      console.log(slots.default());
    });

    onMounted(() => {
      setTimeout(() => {
        console.log('onMounted', slots.default());

        // TODO: copy first item to copied
      });
      scrollerElementRef.value = slidesContainerNode.el;

      autoplay.startAutoplay();

      scrollerElementRef.value?.addEventListener('scroll', carouselScroll.onScrollEvent);

      lastSlide.startIntersection();
    });

    onBeforeUnmount(() => {
      autoplay.stopAutoplay();

      scrollerElementRef.value?.removeEventListener('scroll', carouselScroll.onScrollEvent);

      lastSlide.stopIntersection();
    });

    expose({ next, previous });

    // return the render function
    return () => h('div', {
      class: 'rw-carousel',
    }, [
      slidesContainerNode,
      lastSlideNode,
      btnNode({
        slotName: 'prevButtonSlot',
        click: previous,
        icon: 'mdi:chevron-left',
        classes: ['prev'],
      }),
      btnNode({
        slotName: 'nextButtonSlot',
        click: next,
        icon: 'mdi:chevron-right',
        classes: ['next'],
      }),
    ]);
  },
};

</script>

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
}
</style>

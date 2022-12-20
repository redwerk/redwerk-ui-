import type { VNode, ComponentPublicInstance } from 'vue';

export interface RwCarouselEvents {}

export interface RwCarouselAutoplayOptions {
  delay?: number;
  pauseOnHover?: boolean;
}

export interface RwCarouselProps extends RwCarouselEvents {
  vertical?: boolean,
  infinite?: boolean,
  showScroll?: boolean,
  autoplay?: boolean | RwCarouselAutoplayOptions,
  maxVisible?: number,
  notVisibleOffset?: string,
  showDots?: boolean,
  showButtons?: boolean,
  scrollByDrag?: boolean,
}

export interface RwCarouselSlots {
  default: (data: {
    activeItemIndex: number,
  }) => VNode[];

  prevButtonSlot: (data: {
    click: () => void
  }) => VNode[];

  nextButtonSlot: (data: {
    click: () => void
  }) => VNode[];

  bottomSlot: (data: {
    previous: () => void,
    next: () => void,
    scrollTo: (slideKey: string) => void,
    slidesKeys: string[],
    activeSlideKey: string,
  }) => VNode[];

  dotSlot: (data: {
    slideNumber: number,
    slideKey: string,
    click: () => void,
    active: boolean,
  }) => VNode[];
}

export interface RwCarouselComponent extends ComponentPublicInstance<RwCarouselProps> {
  next: () => void;
  previous: () => void;
}

export interface RwCarouselItemEvents {
  onVisibilityChange: (value: boolean) => void;
}

export interface RwCarouselItemProps extends RwCarouselItemEvents {}

export interface RwCarouselItemSlots {
  default: (data: {
    visible: boolean,
  }) => VNode[];
}

export interface RwCarouselItemComponent extends ComponentPublicInstance<RwCarouselItemProps> {}

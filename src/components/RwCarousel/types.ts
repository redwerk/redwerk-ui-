import type { VNode, ComponentPublicInstance } from 'vue';

export interface RwCarouselEvents {}

export interface RwCarouselAutoplayOptions {
  delay?: number;
  pauseOnHover?: boolean;
}

export interface RwCarouselProps extends RwCarouselEvents {
  infinite?: boolean;
  vertical?: boolean;
  showScroll?: boolean;
  autoplay?: boolean | RwCarouselAutoplayOptions;
}

export interface RwCarouselSlots {
  default: () => VNode[];

  prevButtonSlot: (data: {
    click: () => void
  }) => VNode[];

  nextButtonSlot: (data: {
    click: () => void
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

import type { VNode, ComponentPublicInstance } from 'vue';

export interface RwRatingEvents {
  ['onUpdate:modelValue']: (value: number) => void;
}

export interface RwRatingProps extends RwRatingEvents {
  modelValue: number;
}

export interface RwRatingSlots {
  default: () => VNode[];
  contentSlot: () => VNode[];
}

export interface RwRatingComponent extends ComponentPublicInstance<RwRatingProps> {}

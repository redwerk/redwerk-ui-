import type { VNode } from 'vue';
import type { GlobalComponentConstructor } from '@/utils/ts-helper';

export interface RwRatingEvents {
  ['onUpdate:modelValue']: () => void;
}

export interface RwRatingProps extends RwRatingEvents {
  modelValue: number;
}

export interface RwRatingSlots {
  default: () => VNode[];
  contentSlot: () => VNode[];
}

type RwRating = GlobalComponentConstructor<RwRatingProps, RwRatingSlots>;

export default RwRating;

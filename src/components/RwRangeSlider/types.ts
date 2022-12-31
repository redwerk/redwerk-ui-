import type { VNode, ComponentPublicInstance } from 'vue';

export interface RwRangeSliderEvents {}

export interface RwRangeSliderProps extends RwRangeSliderEvents {
  min: number,
  max: number,
  value: number,
  multiple: boolean,
}

export interface RwRangeSliderSlots {
  default: () => VNode[];
}

export interface RwRangeSliderComponent extends ComponentPublicInstance<RwRangeSliderProps> {}

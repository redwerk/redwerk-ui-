import type { VNode, ComponentPublicInstance } from 'vue';

export interface RwProgressBarEvents {}

export interface RwProgressBarProps extends RwProgressBarEvents {
  min: number,
  max: number,
  value: number,
  orientation?: 'horizontal' | 'vertical',
}

export interface RwProgressBarSlots {
  default: () => VNode[];
}

export interface RwProgressBarComponent extends ComponentPublicInstance<RwProgressBarProps> {}

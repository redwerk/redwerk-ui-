import type { VNode } from 'vue';
import type { GlobalComponentConstructor } from '@/utils/ts-helper';

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

type RwProgressBar = GlobalComponentConstructor<RwProgressBarProps, RwProgressBarSlots>;

export default RwProgressBar;

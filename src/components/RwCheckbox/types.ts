import type { VNode } from 'vue';
import type { GlobalComponentConstructor } from '@/utils/ts-helper';

export interface RwCheckboxEvents {
  ['onUpdate:modelValue']: () => void;
}

export interface RwCheckboxProps extends RwCheckboxEvents {
  modelValue: boolean;
}

export interface RwCheckboxSlots {
  default: () => VNode[];
  contentSlot: () => VNode[];
}

type RwCheckbox = GlobalComponentConstructor<RwCheckboxProps, RwCheckboxSlots>;

export default RwCheckbox;

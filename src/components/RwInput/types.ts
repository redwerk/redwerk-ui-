import type { VNode, ComponentPublicInstance, InputHTMLAttributes } from 'vue';

export interface RwInputEvents {
}

export type RwInputProps = RwInputEvents & InputHTMLAttributes & {
  modelValue?: any,
  clearable?: boolean,
  errors?: string | string[]
};

export interface RwInputSlots {
  labelSlot: () => VNode[];
  beforeSlot: () => VNode[];
  afterSlot: () => VNode[];
  bottomSlot: (data: {
    errors?: string | string[]
  }) => VNode[];
  clearableSlot: (data: {
    clear: () => void,
  }) => VNode[];
}

export interface RwInputComponent extends ComponentPublicInstance<RwInputProps> {}

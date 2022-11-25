import type { VNode, ComponentPublicInstance } from 'vue';

export interface RwCheckboxEvents {
  ['onUpdate:modelValue']: (value: boolean) => void;
}

export interface RwCheckboxProps extends RwCheckboxEvents {
  modelValue: boolean;
}

export interface RwCheckboxSlots {
  default: () => VNode[];
  contentSlot: () => VNode[];
}

export interface RwCheckboxComponent extends ComponentPublicInstance<RwCheckboxProps> {}

export type RwCheckboxInputEvents = RwCheckboxEvents;
export type RwCheckboxInputProps = RwCheckboxProps;
export interface RwCheckboxInputSlots {}

export interface RwCheckboxInputComponent extends ComponentPublicInstance<RwCheckboxInputProps> {}

export interface RwCheckboxLabelEvents {}
export interface RwCheckboxLabelProps {}
export interface RwCheckboxLabelSlots {
  default: () => VNode[];
}

export interface RwCheckboxLabelComponent extends ComponentPublicInstance<RwCheckboxLabelProps> {}

import type { VNode, ComponentPublicInstance } from 'vue';

export type ParseFunction = (item: any) => any;

export interface RwSelectEvents {
  ['onUpdate:modelValue']: (value: any) => void;
}

export interface RwSelectProps extends RwSelectEvents {
  modelValue: any,
  items?: any[],
  itemValue?: string | ParseFunction,
  itemTitle?: string | ParseFunction,
  disabledItems?: number[],
  multiple?: boolean,
  disabled?: boolean,
  required?: boolean,
}

export interface RwSelectSlots {
  default: () => VNode[];

  labelSlot: (data: {
    open: boolean,
    disabled: boolean
  }) => VNode[];

  activatorSlot: (data: {
    value: any,
    item: any,
    open: boolean,
  }) => VNode[];

  selectedSlot: (data: {
    value: any,
    item: any,
    open: boolean,
  }) => VNode[];

  placeholderSlot: () => VNode[];

  iconSlot: (data: {
    value: any,
    item: any,
    open: boolean,
  }) => VNode[];

  itemSlot: (data: {
    item: any,
    active: boolean,
    selected: boolean,
    disabled: boolean,
  }) => VNode[];
}

export interface RwSelectComponent extends ComponentPublicInstance<RwSelectProps> {}

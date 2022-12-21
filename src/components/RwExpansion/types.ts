import type { VNode, ComponentPublicInstance } from 'vue';

export interface RwExpansionEvents {}

export interface RwExpansionProps extends RwExpansionEvents {
  as: string,
  defaultOpen: boolean,
}

export interface RwExpansionSlots {
  activatorSlot: () => VNode[];
  contentSlot: () => VNode[];
}

export interface RwExpansionComponent extends ComponentPublicInstance<RwExpansionProps> {}

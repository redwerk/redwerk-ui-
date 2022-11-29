import type { VNode, ComponentPublicInstance } from 'vue';

export interface RwScrollToTopProps {}

export interface RwScrollToTopSlots {
  default: () => VNode[];
}

export interface RwScrollToTopComponent extends ComponentPublicInstance<RwScrollToTopProps> {}

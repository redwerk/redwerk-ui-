import type { VNode, ComponentPublicInstance } from 'vue';

export interface RwScrollToTopEvents {
  onClick?: () => void;
}

export interface RwScrollToTopProps extends RwScrollToTopEvents {

}

export interface RwScrollToTopSlots {
  default: () => VNode[];
}

export interface RwScrollToTopComponent extends ComponentPublicInstance<RwScrollToTopProps> {}

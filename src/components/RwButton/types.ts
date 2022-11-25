import type { VNode, ComponentPublicInstance } from 'vue';

export interface RwButtonEvents {
  onClick?: () => void;
}

export interface RwButtonProps extends RwButtonEvents {
  loading?: boolean;
  type?: 'button' | 'submit';
}

export interface RwButtonSlots {
  default: () => VNode[];
}

export interface RwButtonComponent extends ComponentPublicInstance<RwButtonProps> {}

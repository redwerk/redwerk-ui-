import type { VNode, ComponentPublicInstance } from 'vue';

export interface RwButtonEvents {
  onClick?: () => void;
}

export interface RwButtonProps extends RwButtonEvents {
  loading?: boolean;
  type?: 'button' | 'submit';
  href?: string;
  to?: string | Record<string, any>;
  target?: '_self' | '_blank' | '_parent' | '_top',
  rel?: string,
  tag?: string,
}

export interface RwButtonSlots {
  default: () => VNode[];
}

export interface RwButtonComponent extends ComponentPublicInstance<RwButtonProps> {}

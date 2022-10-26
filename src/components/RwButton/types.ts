import type { VNode } from 'vue';
import type { GlobalComponentConstructor } from '@/utils/ts-helper';

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

type RwButton = GlobalComponentConstructor<RwButtonProps, RwButtonSlots>;

export default RwButton;

import type { VNode } from 'vue';
import type { GlobalComponentConstructor } from '@/utils/ts-helper';

export interface RButtonEvents {
  onClick?: () => void;
}

export interface RButtonProps extends RButtonEvents {
  loading?: boolean;
  type?: 'button' | 'submit';
}

export interface RButtonSlots {
  default: () => VNode[];
}

type RButton = GlobalComponentConstructor<RButtonProps, RButtonSlots>;

export default RButton;

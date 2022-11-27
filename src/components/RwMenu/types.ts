import type { VNode, ComponentPublicInstance } from 'vue';

export interface RwMenuEvents {}

export interface RwMenuProps extends RwMenuEvents {}

export interface RwMenuSlots {
  activatorSlot: (data: {
    open: boolean,
    close: () => void
  }) => VNode[];

  itemsSlot: (data: {
    open: boolean,
    close: () => void
  }) => VNode[];
}

export interface RwMenuComponent extends ComponentPublicInstance<RwMenuProps> {}

export interface RwMenuItemEvents {}

export interface RwMenuItemProps extends RwMenuEvents {
  disabled?: boolean,
}

export interface RwMenuItemSlots {
  default: (data: {
    open: boolean,
    disabled: boolean,
    close: () => void
  }) => VNode[];
}

export interface RwMenuItemComponent extends ComponentPublicInstance<RwMenuItemProps> {}

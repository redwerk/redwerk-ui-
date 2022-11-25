import type { ComponentPublicInstance } from 'vue';

export interface RwIconEvents {}

export interface RwIconProps extends RwIconEvents {
  name: string;
}

export interface RwIconSlots {}

export interface RwIconComponent extends ComponentPublicInstance<RwIconProps> {}

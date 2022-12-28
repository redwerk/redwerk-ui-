import type { VNode, ComponentPublicInstance } from 'vue';

export interface RwSkeletonBuilderProps {
  structure: string[][],
  loading: boolean,
  horizontal: boolean,
  behavior: string,
}

export interface RwSkeletonBuilderSlots {
  default: () => VNode[];
}

export interface RwSkeletonBuilderComponent extends ComponentPublicInstance<RwSkeletonBuilderProps> {}

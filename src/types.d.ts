import { GlobalComponentConstructor, ComponentConstructor } from './utils/ts-helper';
import plugin from './index';

import { RwButtonComponent, RwButtonProps, RwButtonSlots } from './components/RwButton/types';

import {
  RwCheckboxComponent,
  RwCheckboxInputComponent,
  RwCheckboxProps,
  RwCheckboxSlots,
  RwCheckboxInputProps,
  RwCheckboxInputSlots, RwCheckboxLabelProps, RwCheckboxLabelComponent, RwCheckboxLabelSlots,
} from './components/RwCheckbox/types';

import { RwIconComponent, RwIconProps, RwIconSlots } from './components/RwIcon/types';

import { RwProgressBarComponent, RwProgressBarProps, RwProgressBarSlots } from './components/RwProgressBar/types';

import { RwRatingComponent, RwRatingProps, RwRatingSlots } from './components/RwRating/types';

import { RwSelectComponent, RwSelectProps, RwSelectSlots } from './components/RwSelect/types';

import { RwScrollToTopComponent, RwScrollToTopProps, RwScrollToTopSlots } from './components/RwScrollToTop/types';

import {
  RwMenuComponent,
  RwMenuItemComponent,
  RwMenuProps,
  RwMenuSlots,
  RwMenuItemProps,
  RwMenuItemSlots,
} from './components/RwMenu/types';

import { RwSkeletonComponent, RwSkeletonProps } from './components/RwSkeleton/types';

import {
  RwCarouselComponent,
  RwCarouselItemComponent,
  RwCarouselProps,
  RwCarouselSlots,
  RwCarouselItemProps, RwCarouselItemSlots,
} from './components/RwCarousel/types';

import {
  RwExpansionProps,
  RwExpansionSlots,
  RwExpansionComponent,
} from './components/RwExpansion/types';

import {
  RwSkeletonBuilderComponent,
  RwSkeletonBuilderProps,
  RwSkeletonBuilderSlots,
} from './components/RwSkeletonBuilder/types';

import { RwInputComponent, RwInputProps, RwInputSlots } from './components/RwInput/types';

export declare const RwButton: ComponentConstructor<RwButtonComponent>;
export declare const RwCheckbox: ComponentConstructor<RwCheckboxComponent>;
export declare const RwCheckboxInput: ComponentConstructor<RwCheckboxInputComponent>;
export declare const RwCheckboxLabel: ComponentConstructor<RwCheckboxLabelComponent>;
export declare const RwIcon: ComponentConstructor<RwIconComponent>;
export declare const RwProgressBar: ComponentConstructor<RwProgressBarComponent>;
export declare const RwRating: ComponentConstructor<RwRatingComponent>;
export declare const RwSelect: ComponentConstructor<RwSelectComponent>;
export declare const RwScrollToTop: ComponentConstructor<RwScrollToTopComponent>;
export declare const RwCarousel: ComponentConstructor<RwCarouselComponent>;
export declare const RwCarouselItem: ComponentConstructor<RwCarouselItemComponent>;
export declare const RwExpansion: ComponentConstructor<RwExpansionComponent>;
export declare const RwSkeleton: ComponentConstructor<RwSkeletonComponent>;
export declare const RwSkeletonBuilder: ComponentConstructor<RwSkeletonBuilderComponent>;
export declare const RwMenu: ComponentConstructor<RwMenuComponent>;
export declare const RwMenuItem: ComponentConstructor<RwMenuItemComponent>;
export declare const RwInput: ComponentConstructor<RwInputComponent>;

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    RwButton: GlobalComponentConstructor<RwButtonProps, RwButtonSlots>,
    RwCheckbox: GlobalComponentConstructor<RwCheckboxProps, RwCheckboxSlots>,
    RwCheckboxInput: GlobalComponentConstructor<RwCheckboxInputProps, RwCheckboxInputSlots>,
    RwCheckboxLabel: GlobalComponentConstructor<RwCheckboxLabelProps, RwCheckboxLabelSlots>,
    RwIcon: GlobalComponentConstructor<RwIconProps, RwIconSlots>,
    RwProgressBar: GlobalComponentConstructor<RwProgressBarProps, RwProgressBarSlots>,
    RwRating: GlobalComponentConstructor<RwRatingProps, RwRatingSlots>,
    RwSelect: GlobalComponentConstructor<RwSelectProps, RwSelectSlots>,
    RwScrollToTop: GlobalComponentConstructor<RwScrollToTopProps, RwScrollToTopSlots>,
    RwCarousel: GlobalComponentConstructor<RwCarouselProps, RwCarouselSlots>,
    RwCarouselItem: GlobalComponentConstructor<RwCarouselItemProps, RwCarouselItemSlots>,
    RwSkeleton: GlobalComponentConstructor<RwSkeletonProps>,
    RwSkeletonBuilder: GlobalComponentConstructor<RwSkeletonBuilderProps, RwSkeletonBuilderSlots>,
    RwMenu: GlobalComponentConstructor<RwMenuProps, RwMenuSlots>,
    RwMenuItem: GlobalComponentConstructor<RwMenuItemProps, RwMenuItemSlots>,
    RwExpansion: GlobalComponentConstructor<RwExpansionProps, RwExpansionSlots>,
    RwInput: GlobalComponentConstructor<RwInputProps, RwInputSlots>
  }
}

export default plugin;

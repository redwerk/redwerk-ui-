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

import { RwScrollToTopProps, RwScrollToTopSlots } from './components/RwScrollToTop/types';

import {
  RwCarouselComponent,
  RwCarouselItemComponent,
  RwCarouselProps,
  RwCarouselSlots,
  RwCarouselItemProps, RwCarouselItemSlots,
} from './components/RwCarousel/types';

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
  }
}

export default plugin;

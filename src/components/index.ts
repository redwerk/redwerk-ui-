import { defineAsyncComponent } from 'vue';

export const RwButton = defineAsyncComponent(() => import('./RwButton/RwButton.vue'));

export const RwCheckbox = defineAsyncComponent(() => import('./RwCheckbox/RwCheckbox.vue'));
export const RwCheckboxInput = defineAsyncComponent(() => import('./RwCheckbox/RwCheckboxInput.vue'));
export const RwCheckboxLabel = defineAsyncComponent(() => import('./RwCheckbox/RwCheckboxLabel.vue'));

export const RwIcon = defineAsyncComponent(() => import('./RwIcon/RwIcon.vue'));

export const RwProgressBar = defineAsyncComponent(() => import('./RwProgressBar/RwProgressBar.vue'));

export const RwRating = defineAsyncComponent(() => import('./RwRating/RwRating.vue'));

export const RwSelect = defineAsyncComponent(() => import('./RwSelect/RwSelect.vue'));

export const RwMenu = defineAsyncComponent(() => import('./RwMenu/RwMenu.vue'));
export const RwMenuItem = defineAsyncComponent(() => import('./RwMenu/RwMenuItem.vue'));

export const RwScrollToTop = defineAsyncComponent(() => import('./RwScrollToTop/RwScrollToTop.vue'));

export const RwCarousel = defineAsyncComponent(() => import('./RwCarousel/RwCarousel.vue'));
export const RwCarouselItem = defineAsyncComponent(() => import('./RwCarousel/RwCarouselItem.vue'));

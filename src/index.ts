import { defineAsyncComponent } from 'vue';

export const RwButton = defineAsyncComponent(() => import('./components/RwButton/RwButton.vue'));

export const RwCheckbox = defineAsyncComponent(() => import('./components/RwCheckbox/RwCheckbox.vue'));
export const RwCheckboxInput = defineAsyncComponent(() => import('./components/RwCheckbox/RwCheckboxInput.vue'));
export const RwCheckboxLabel = defineAsyncComponent(() => import('./components/RwCheckbox/RwCheckboxLabel.vue'));

export const RwIcon = defineAsyncComponent(() => import('./components/RwIcon/RwIcon.vue'));

export const RwProgressBar = defineAsyncComponent(() => import('./components/RwProgressBar/RwProgressBar.vue'));

export const RwRating = defineAsyncComponent(() => import('./components/RwRating/RwRating.vue'));

export const RwSelect = defineAsyncComponent(() => import('./components/RwSelect/RwSelect.vue'));

const components = [
  {
    name: 'RwButton',
    kebabCase: 'rw-button',
    instance: RwButton,
  },
  {
    name: 'RwCheckbox',
    kebabCase: 'rw-checkbox',
    instance: RwCheckbox,
  },
  {
    name: 'RwCheckboxInput',
    kebabCase: 'rw-checkbox-input',
    instance: RwCheckboxInput,
  },
  {
    name: 'RwCheckboxLabel',
    kebabCase: 'rw-checkbox-label',
    instance: RwCheckboxLabel,
  },
  {
    name: 'RwIcon',
    kebabCase: 'rw-icon',
    instance: RwIcon,
  },
  {
    name: 'RwProgressBar',
    kebabCase: 'rw-progress-bar',
    instance: RwProgressBar,
  },
  {
    name: 'RwRating',
    kebabCase: 'rw-rating',
    instance: RwRating,
  },
  {
    name: 'RwSelect',
    kebabCase: 'rw-select',
    instance: RwSelect,
  },
];

const plugin = {
  install(vue: any) {
    // eslint-disable-next-line no-restricted-syntax
    for (const prop in components) {
      // eslint-disable-next-line no-prototype-builtins
      if (components.hasOwnProperty(prop)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const component = components[prop];
        vue.component(component.name, component.instance);
      }
    }
  },
};

export default plugin;

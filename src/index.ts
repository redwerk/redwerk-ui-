import * as components from './components';

const plugin = {
  install(vue: any) {
    // eslint-disable-next-line no-restricted-syntax
    for (const componentName in components) {
      // eslint-disable-next-line no-prototype-builtins,import/namespace
      if (components.hasOwnProperty(componentName)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line import/namespace
        vue.component(componentName, components[componentName]);
      }
    }
  },
};

export * from './components';

export default plugin;

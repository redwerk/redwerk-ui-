import * as components from './components';

const plugin = {
  install(vue: any) {
    Object.keys(components).forEach((componentName) => {
      // eslint-disable-next-line import/namespace
      vue.component(componentName, components[componentName as keyof typeof components]);
    });
  },
};

export * from './components';

export default plugin;

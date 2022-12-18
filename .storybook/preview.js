import '../src/themes/example.scss';
import '../src/themes/blue.scss';
import '../stories/assets/styles/index.scss'
import {THEMES, WithThemeProvider} from "../stories/decorators/WithThemeProvider";

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Set the initial theme
    current: 'light'
  }
}

export const globalTypes = {
  componentTheme: {
    name: 'Component theme',
    description: 'Choose theme for components preview',
    defaultValue: 'example',
    toolbar: {
      icon: 'paintbrush',
      items: Object.values(THEMES),
    },
  },
};

export const decorators = [WithThemeProvider];


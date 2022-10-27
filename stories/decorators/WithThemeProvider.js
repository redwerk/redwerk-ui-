export const THEMES = {
  example: {
    value: 'example',
    title: 'Example',
    class: 'example-theme',
  },
  blue: {
    value: 'blue',
    title: 'Blue',
    class: 'blue-theme',
  },
};

export const getCaptionForComponentTheme = (theme) => THEMES[theme]?.class || '';

export const WithThemeProvider = (_, context) => {
  const theme = getCaptionForComponentTheme(context.globals.componentTheme);

  return {
    template: `<div class="${theme}"><story/></div>`,
  };
};

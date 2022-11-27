export const HeightDecorator = (height) => () => ({
  template: `<div style="min-height: ${height};"><story /></div>`,
});

export function getSourceCode(componentName, view) {
  return fetch(`/${componentName}/${view}.vue`)
    .then((response) => response.text());
}

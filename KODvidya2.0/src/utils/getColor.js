export const getColor = (name) =>
  getComputedStyle(document.documentElement)
    .getPropertyValue(`--color-${name}`)
    .trim();

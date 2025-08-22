export const getTranslucentColor = (color: string, alpha: number): string => {
  if (color.startsWith("var(--")) {
    color = color.match(/var\((--[^)]+)\)/)?.[1]?.trim() || color;
    color =
      getComputedStyle(document.documentElement).getPropertyValue(color) ||
      color;
  }
  const hex = color.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

import { capitalize, reduceObjectArray } from '.';

const populateStyles = (theme) => {
  const styleProperties = ['backgroundColor', 'color', 'borderColor'];
  const styleObjects = styleProperties.map((property) => {
    const styles = Object.keys(theme).map((key) => {
      if (key == 'name') {
        return {};
      }
      return { [property + capitalize(key)]: { [property]: theme[key] } };
    });
    return reduceObjectArray(styles);
  });
  return reduceObjectArray(styleObjects);
};
const getThemeFields = (themes) => {
  const themeFields: Set<String> = themes.reduce((accumulatedFields, theme) => {
    const localThemeFields = Object.keys(theme);
    return new Set([...accumulatedFields, ...localThemeFields]);
  }, new Set([]));
  return [...themeFields].filter((field) => field != 'name');
};

export { populateStyles, getThemeFields };

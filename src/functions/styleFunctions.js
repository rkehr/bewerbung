import { capitalize, reduceObjectArray } from './';

const populateStyles = theme => {
  const styleProperties = ['backgroundColor', 'color', 'borderColor'];
  const styleObjects = styleProperties.map(property => {
    const styles = Object.keys(theme).map(key => {
      if (key == 'name') {
        return {};
      }
      return { [property + capitalize(key)]: { [property]: theme[key] } };
    });
    return reduceObjectArray(styles);
  });
  return reduceObjectArray(styleObjects);
};

export { populateStyles };

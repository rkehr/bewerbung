const reverse = array => {
  return array.map((_, index) => array[array.length - 1 - index]);
};

const reduceObjectArray = array => {
  return array.reduce((accumulator, obj) => ({ ...accumulator, ...obj }), {});
};

export { reverse, reduceObjectArray };

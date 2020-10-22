const reverse = array => {
  return array.map((_, index) => array[array.length - 1 - index]);
};

export { reverse };

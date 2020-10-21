const reverse = (array) => {
  return array.map((item, index) => array[array.length - 1 - index]);
};

export { reverse };

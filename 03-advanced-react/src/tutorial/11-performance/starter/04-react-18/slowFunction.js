const slowFunction = () => {
  let value = 0;
  for (var i = 0; i <= 100000000; i++) {
    value += 1;
  }
  return value;
};
export default slowFunction;

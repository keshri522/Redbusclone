const Multiply = (a, b) => {
  return {
    mul: function () {
      return a + b;
    },
    find: function () {
      return a * b;
    },
  };
};
const Result = Multiply(10, 30);
console.log(Result.mul());
console.log(Result.find());

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum += item, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, item, index, arr) => {
    if (arr[index + 1]) {
      product *= arr[index + 1];
    }
    return product;
  }, arr[0]);
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
	let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

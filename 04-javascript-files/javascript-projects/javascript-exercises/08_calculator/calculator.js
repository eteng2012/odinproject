const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(x) {
	return x.reduce((total, current) => total+current, 0)
};

const multiply = function(x) {
  return x.reduce((total, current) => total*current, 1)
};

const power = function(x, y) {
	let sum = 1;
  for (let i=0; i<y; i++) {
    sum *= x;
  }
  return sum;
};

const factorial = function(x) {
	let sum = 1;
  for (let i=1; i<=x; i++) {
    sum *= i;
  }
  return sum;
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

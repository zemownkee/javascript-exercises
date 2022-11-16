const add = function(...args) {
	let total = 0;
  if (args === undefined) return 0;

  for(let arg of args) {
    total += arg;
  }
  return total;
};

const subtract = function(a, b) {
return (a - b);
};

const sum = function(arrayArg) {
  const output = arrayArg.reduce((total, item) => total + item, 0)
  return output;
};

const multiply = function(arrayArg) {
  const output = arrayArg.reduce((total, item) => total * item, 1)
  return output;
};

const power = function(a, b) {
  let accumulator = 1;
  for(let i = 0; i < b; i++) {
    accumulator *= a;
  }
  return accumulator;
};

const factorial = function(number) {
  let output = 1;
  for(let temp = number; temp > 1; temp--) {
    output *= temp; 
  }
	return output;
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

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

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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

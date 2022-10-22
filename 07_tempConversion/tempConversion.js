const ftoc = function(degFar) {
  let degCel = (degFar - 32) * (5/9);
  return parseFloat(degCel.toFixed(1));
};

const ctof = function(degCel) {
  let degFar = (degCel * (9/5)) + 32;
  return parseFloat(degFar.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

const sumAll = function(firstNum, lastNum) {
//validate input
if(firstNum < 0 || lastNum <0 ||)

//create addition array
const addArray = [firstNum, lastNum];
let sum = 0;
//loop through numbers between first and last to complete array
for(i = firstNum; i < lastNum; i++) {
    addArray.push(i);
}

//sum all numbers in array
for(const number in addArray) {
    sum += parseInt(number);
}
console.log(sum);
return sum;
};

// Do not edit below this line
module.exports = sumAll;

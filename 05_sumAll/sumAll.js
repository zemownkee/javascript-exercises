const sumAll = function(firstNum, lastNum) {

//validate input
if(typeof(firstNum) != "number" || typeof(lastNum)  !=  "number" || firstNum < 0 || lastNum < 0) {
    return 'ERROR';
} else {
    startNum = (firstNum < lastNum) ? firstNum : lastNum;
    console.log(startNum);
    endNum = (firstNum < lastNum) ? lastNum : firstNum;
    console.log(endNum);
}

//create addition array
const addArray = [startNum, endNum];
let sum = 0;

for(i = startNum; i < endNum; i++) {
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
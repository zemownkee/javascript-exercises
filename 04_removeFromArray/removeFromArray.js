const removeFromArray = function(firstArray, ...removalArgs) {
    const newArray = [];
    
    for(const item of firstArray) {
        if (removalArgs[removalArgs.indexOf(item)] === item) {
            continue;
        } else {
            newArray.push(item);
        }
    }
    return newArray;
    };
// Do not edit below this line
module.exports = removeFromArray;
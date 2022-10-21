const removeFromArray = function(firstArray, ...theArgs) {
    const newArray = [];
    
    for(const item of firstArray) {
        if (theArgs[theArgs.indexOf(item)] === item) {
            continue;
        } else {
            newArray.push(item);
        }
    }
    return newArray;
    };
// Do not edit below this line
module.exports = removeFromArray;
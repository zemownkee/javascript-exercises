const removeFromArray = function(firstArray, ...theArgs) {
   
    const initialArray = firstArray;
    const removalArgs = theArgs;
    const newArray = [];
    
    for(const item of initialArray) {
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

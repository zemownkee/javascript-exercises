const removeFromArray = function(...theArgs) {
   
    const initialArray = theArgs[0];
    const removalArgs = theArgs.slice(1);
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

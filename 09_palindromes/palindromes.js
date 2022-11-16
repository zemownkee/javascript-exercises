
const test = 'this shouldnot 2435 return true';
const palindromes = function (string) {
//clean string for comparison
const testString = string
                    .toLowerCase()
                    .replace(/[.,\/#!$%\^&\*;@:{}=\-_`~()]/g, "")
                    .replace(/ /g, '');

return( 
    testString  
            .split('')
            .reverse()
            .join('') == testString);

}
// Do not edit below this line
module.exports = palindromes;

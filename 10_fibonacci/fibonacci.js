const fibonacci = function(count) {
    let a = 0;
    let b = 1;
    if (count < 0) return "OOPS";
    if (count < 2) return 1;
    for(let i = 1; i < count; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
return b;
}
// Do not edit below this line
module.exports = fibonacci;

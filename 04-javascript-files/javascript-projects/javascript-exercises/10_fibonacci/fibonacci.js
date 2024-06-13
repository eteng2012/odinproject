const fibonacci = function(x) {
    let first = 1;
    let second = 1;
    if (typeof x == String) {
        x = Number(x);
    }
    if (x < 0) {
        return "OOPS"
    }
    if (x == 0) {
        return 0;
    }
    for (let i=2; i<x; i++) {
        let temp = first + second;
        first = second;
        second = temp;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;

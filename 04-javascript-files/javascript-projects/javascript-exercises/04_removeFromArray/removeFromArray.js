const removeFromArray = function(array, ...args) {
    /*const answer = [];
    for (const x of array) {
        if (args.includes(x)) {
            answer.push(x);
        }
    }
    return answer;*/
    return array.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;

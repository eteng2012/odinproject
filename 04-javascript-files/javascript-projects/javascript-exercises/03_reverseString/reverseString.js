const reverseString = function(string) {
    let answer = ""
    for (let i=string.length-1; i>=0; i--) {
        answer = answer + string[i];
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;

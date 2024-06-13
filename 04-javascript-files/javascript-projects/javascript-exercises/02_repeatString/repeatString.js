const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR"
    }
    let answer = "";
    for (let i=0; i<num; i++) {
        answer += str;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;

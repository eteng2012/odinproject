const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return "ERROR";
    }
    let answer = 0;
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    for (let i=start; i<=end; i++) {
        answer+=i;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;

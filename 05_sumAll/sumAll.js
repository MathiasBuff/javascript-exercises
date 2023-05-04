const sumAll = function(x1, x2) {
    // Check that the arguments are within constraints
    if (typeof(x1) != "number" || typeof(x2) != "number" || x1 < 0 || x2 < 0) {
        return "ERROR";
    }

    const max = Math.max(x1, x2);
    const min = Math.min(x1, x2);
    
    // O(1) algorithm with math
    // return (max * max - max * min + 2 * max - min + 1) / 2;

    // O(n) algorithm with loop, n = max-min
    let sum = 0;
    for (i = min; i <= max; i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;

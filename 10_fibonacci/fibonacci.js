const fibonacci = function(n) {
    // handle string input
    if (typeof(n) == "string") n = Number(n);
    
    // check for edge cases
    if (n < 0) return "OOPS";
    if (n < 3) return 1;
    
    let old = 1, cur = 1, tmp = 1;
    for (i = 2; i < n; i++) {
        tmp = cur;
        cur = tmp + old;
        old = tmp;
    }
    return cur
};

// Do not edit below this line
module.exports = fibonacci;

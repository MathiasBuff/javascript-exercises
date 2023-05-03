const removeFromArray = function(arr, ...args) {
    let output = [];
    for (element of arr) {
        if (args.includes(element)) {
            continue;
        } else {
            output.push(element);
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;

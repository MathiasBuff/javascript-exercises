const leapYears = function(year) {
    if (!Number.isInteger(year)) return "ERROR";

    return !(year % 400)? true : !(year % 100)? false : !(year % 4)? true : false;
    // Equivalent to:
    // if (year % 400 == 0) {
    //     return true;
    // } else if (year % 100 == 0) {
    //     return false;
    // } else if (year % 4 == 0) {
    //     return true;
    // } else {
    //     return false;
    // }
};

// Do not edit below this line
module.exports = leapYears;

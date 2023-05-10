const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^0-9A-Z]+/gi,"");
    return str === str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;

const findTheOldest = function(arr) {
    function getAge(person) {
        if (Object.hasOwn(person, "yearOfDeath")) {
            return person.yearOfDeath - person.yearOfBirth;
        } else {
            return new Date().getFullYear() - person.yearOfBirth;
        }
    }
    
    arr.sort((a, b) => getAge(b) - getAge(a));
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;

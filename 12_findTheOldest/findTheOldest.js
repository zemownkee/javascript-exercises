const findTheOldest = function(obj) {
    function sortFunction(a, b) {
        let thisYear = new Date().getFullYear();
        ageA = !a.yearOfDeath ? thisYear - a.yearOfBirth : a.yearOfDeath - a.yearOfBirth;
        ageB = !b.yearOfDeath ? thisYear - b.yearOfBirth : b.yearOfDeath - b.yearOfBirth;
        return ageA < ageB ? 1 : -1;
    }
    
    const sortedList = obj.sort(sortFunction);
    return sortedList[0];
};

// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest = function(people) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const peopleFromOldest = people.sort((a, b) => {
        const aAge = a.yearOfDeath ?
            a.yearOfDeath - a.yearOfBirth :
            currentYear - a.yearOfBirth;
        const bAge = b.yearOfDeath ?
            b.yearOfDeath - b.yearOfBirth :
            currentYear - b.yearOfBirth;
        if (aAge > bAge) return -1;
        if (aAge < bAge) return 1;
        if (aAge === bAge) return 0;
    });
    return peopleFromOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;

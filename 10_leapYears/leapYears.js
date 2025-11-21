const leapYears = function(year) {
    const divisibleBy4 = year % 4 === 0;
    const divisibleBy100 = year % 100 === 0;
    const divisibleBy400 = year % 400 === 0;
    if (!divisibleBy4) {
        return false;
    }
    if (!divisibleBy100) {
        return true;
    }
    if (divisibleBy400) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;

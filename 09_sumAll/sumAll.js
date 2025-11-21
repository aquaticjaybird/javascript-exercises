const sumAll = function(int1, int2) {
    if ( !(Number.isInteger(int1) && Number.isInteger(int2)) ) {
        return "ERROR";
    }
    if (int1 < 0 || int2 < 0) {
        return "ERROR";
    }
    const sequenceLength = Math.abs(int1 - int2) + 1;
    return (int1 + int2) * sequenceLength / 2;
};

// Do not edit below this line
module.exports = sumAll;

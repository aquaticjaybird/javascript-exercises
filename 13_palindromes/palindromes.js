const palindromes = function (str) {
    const cleanStr = str.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let posStart = 0;
    let posEnd = cleanStr.length - 1;
    while (posStart < cleanStr.length / 2) {
        if (cleanStr[posStart] !== cleanStr[posEnd]) {
            return false;
        }
        posStart++;
        posEnd--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

const removeFromArray = function(arr, ...itemsToRemove) {
    for (let i = 0; i < arr.length; i++) {
        if (itemsToRemove.includes(arr[i])) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};
// Do not edit below this line
module.exports = removeFromArray;

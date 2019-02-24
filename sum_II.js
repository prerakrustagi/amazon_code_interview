/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var i = 0, j = numbers.length - 1;
    while(i < j) {
        var sum = numbers[i] + numbers[j];
        if(sum === target) {
            return [i+1,j+1];
        } else if(sum > target) {
            j -= 1;
        } else {
            i += 1;
        }
    }
    return [];
};

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var result = [];
    var len = Math.pow(2, n);
    for(var i = 0; i < len; i++) {
        result.push((i >>> 0) ^ (i >>> 1));
    }
    return result;
};

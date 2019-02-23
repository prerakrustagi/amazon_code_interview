/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var len = matrix.length;
    var trackMap = {};
    for(var i = 0; i < len; i++) {
        for(j = len - 1; j >= 0; j--) {
            var val = matrix[i][j];
            trackMap[j + '-' + (len-i-1)] = matrix[j][len-i-1];
            if(trackMap[i + '-' + j] || trackMap[i + '-' + j] === 0) {
                val = trackMap[i + '-' + j];
                delete trackMap[i + '-' + j];
            }
            matrix[j][len-i-1] = val;
        }
    }
};

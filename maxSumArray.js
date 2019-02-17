// Maximum sum of i*arr[i] among all rotations of a given array

var arr = [8, 3, 1, 2];

var arrSum = [];
var len = arr.length;
var max = 0;
for(var i in arr) {
  for(var j = 0; j < len; j++) {
    if(!arrSum[j]) { arrSum[j] = 0; }
    if(parseInt(i) + parseInt(j) < len) {
      arrSum[j] += (parseInt(j) + parseInt(i)) * arr[i];
    } else {
      arrSum[j] += (parseInt(i) + parseInt(j) - len) * arr[i];
    }
    if(max < arrSum[j]) {
      max = arrSum[j]
    }
  }
}

console.log(max);

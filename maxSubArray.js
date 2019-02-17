
function maxSubArray(arr) {
  var len = arr.length;
  var sum = arr[0];
  var maxSum = arr[0];
  var si = 0, ei = 0;
  var maxSi = 0, maxEi = 0;
  while(ei < len) {
    if(sum < 0) {
      sum -= arr[si];
      si += 1;
    } else {
      ei += 1;
      sum += arr[ei];
      if(sum > maxSum) {
        maxSum = sum;
        maxSi = si;
        maxEi = ei;
      }
    }
  }
  return arr.slice(maxSi, maxEi + 1);
}

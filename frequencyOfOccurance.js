// Divide and Conquer
var arr = [1,1,2,2,2,3,3,3,3,4,4,4,5,5];
var x = 3;

function firstOccurance(arr, lower, upper, val) {
  var mid = Math.floor((lower + upper) / 2);

  if(arr[mid] === val && arr[mid-1] < arr[mid]) {
    return mid;
  }
  if(arr[mid] < val) {
    return firstOccurance(arr, mid, upper, val)
  } else {
    return firstOccurance(arr, lower, mid, val)
  }
}

function lastOccurance(arr, lower, upper, val) {
  var mid = Math.floor((lower + upper) / 2);

  if(arr[mid] === val && arr[mid+1] > arr[mid]) {
    return mid;
  }
  if(arr[mid] <= val) {
    return lastOccurance(arr, mid, upper, val)
  } else {
    return lastOccurance(arr, lower, mid, val)
  }
}

var last = lastOccurance(arr, 0, arr.length, x);
var first = firstOccurance(arr, 0, arr.length, x);

console.log(last - first + 1);

var arr = [2,3,4,5,6,7,8,9,10];
arr.sort(function(a,b) { return a-b; });
var n = arr.length;
var bResult = false;
for(var i = 0; i < n; i++) {
  arr[i] *= arr[i];
}

for(var i = n-1; i > 1; i--) {
  var a = arr[i];
  var bIndex = 0;
  var cIndex = i-1;
  while(cIndex > bIndex) {
    if(arr[bIndex] + arr[cIndex] === a) {
      bResult = true;
      break;
    }
    arr[bIndex] + arr[cIndex] < a ? bIndex++ : cIndex--;
  }
  if(bResult) {break;}
}

console.log(bResult)

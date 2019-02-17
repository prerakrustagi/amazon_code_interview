var arr = [13, 7, 6, 12];
var len = arr.length;
var result = [];
var stk = [len-1];
for(var i = len-1; i > -1; i--) {
  while(stk.length !== 0 && arr[stk[stk.length - 1]] <= arr[i]) {
    stk.pop();
  }
  result[i] = stk.length === 0 ? -1 : arr[stk[stk.length - 1]];
  stk.push(i);
}

console.log(result);

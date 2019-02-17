var stockPrice = [10,3,2,5,9,4];
var n = stockPrice.length;
var stk = [0];
var result = [];
for(var i = 0; i < n; i++) {
  while(stk.length !== 0 && stockPrice[stk[stk.length - 1]] <= stockPrice[i]) {
    stk.pop();
  }
  result[i] = stk.length === 0 ? (i +1) : (i - stk[stk.length -1]);
  stk.push(i);
}

console.log(result)

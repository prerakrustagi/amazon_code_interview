function findProfitDays(arr) {
  var result = [];
  if(arr.length < 2) {
    return result;
  }
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    while(i < (arr.length - 1) && arr[i] > arr[i+1]) {
      i += 1;
    }
    if(i === (arr.length - 1)) {
      return result;
    }
    result[count] = { buy: i, sell: null };

    while(i < (arr.length - 1) && arr[i] < arr[i+1]) {
      i += 1;
    }
    result[count].sell = i;
    count += 1;
  }
  return result;
}

var a = [100, 180, 10, 310, 40, 543, 930];
console.log(findProfitDays(a));

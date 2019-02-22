function primeCount(n) {
  var primeMap = {};
  var primeCount = 0;
  for(var i = 2 ; i <= n-1; i++) {
    primeMap[i] = false;
  }
  for(var i = 2; i <= n-1; i++) {
    if(!primeMap[i]) {
      primeCount++;
      for(var j = n - 1; j > i; j--) {
        if(j%i === 0) {
          primeMap[j] = true;
        }
      }
    }
  }
  return primeCount;
}

console.log(primeCount(10));

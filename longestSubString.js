
function findLongestSS(str) {
  var si = 0, li = 0;
  var len = str.length;
  var last = {};
  var maxLen = 0;
  var maxStr;
  for(var i = 0; i < len; i++) {
    li = i;
    if(last[str[i]] === undefined) {
      last[str[i]] = i;
    } else {
      si = last[str[i]] + 1;
    }

    if(maxLen < (li - si + 1)) {
      maxStr = str.substring(si, (li + 1));
      maxLen = (li - si + 1);
    }
  }
  return maxStr;
}

console.log(findLongestSS('abcabce'))

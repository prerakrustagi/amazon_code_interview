var str = 'abcbacabcbatt';
var strLen = str.length;

var palLengthArr = [1];
palLengthArr[1] = palindromeLength(str, 1);
var largestPalIndex = 1;
for(var i = 2; i < strLen; i++) {
  var largestPalSpan = Math.floor(palLengthArr[largestPalIndex] / 2);
  if(strLen - i - 1 < largestPalSpan) {
    break;
  }
  if(i < largestPalIndex + largestPalSpan) {
    // It is under the window of largest palindrome
    var lastPalIndex = largestPalIndex + (largestPalIndex - i);
    var lastPalLength = palLengthArr[lastPalIndex];
    if((largestPalIndex - largestPalSpan) < (lastPalIndex - Math.floor(lastPalLength / 2))) {
      palLengthArr.push(lastPalLength);
    } else {
      var palLength = palindromeLength(str, i);
      palLengthArr.push(palLength);
      if(palLengthArr[largestPalIndex] < palLength) {
        largestPalIndex = i;
      }
    }
  } else {
    var palLength = palindromeLength(str, i);
    palLengthArr.push(palLength);
    if(palLengthArr[largestPalIndex] < palLength) {
      largestPalIndex = i;
    }
  }
}

console.log(palLengthArr)

function palindromeLength(str, index) {
  var len = Math.min(index, (str.length - index));
  var palLen = 1;
  for(var i = 1; i <= len; i++) {
    if(str[index-i] === str[index + i]) {
      palLen += 2;
    } else {
      break;
    }
  }
  return palLen;
}

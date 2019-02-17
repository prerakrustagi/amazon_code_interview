function subString(str, pattern) {
  if(str.length < pattern.length) {
    return false;
  }
  var patternMap = {};
  for(var i in pattern) {
    if(!patternMap[pattern[i]]) {
      patternMap[pattern[i]] = 1;
    } else {
      patternMap[pattern[i]] += 1;
    }
  }
  var stringMap = {};
  var count = pattern.length;
  var start = 0 , startIndex = -1, minLen = 10000000;
  for(var i in str) {
    if(!stringMap[str[i]]) {
      stringMap[str[i]] = 1;
    } else {
      stringMap[str[i]] += 1;
    }
    if(patternMap[str[i]] && stringMap[str[i]] <= patternMap[str[i]]) {
      count -= 1;
    }
    if(count === 0) {
      while (!patternMap[str[start]] || stringMap[str[start]] > patternMap[str[start]])
      {
        if (stringMap[str[start]] > patternMap[str[start]]) {
          stringMap[str[start]] -= 1;
        }
        start += 1;
      }

      // update window size
      var lenWindow = i - start + 1;
      if (minLen > lenWindow) {
          minLen = lenWindow;
          startIndex = start;
      }
    }
  }
  if(startIndex === -1) {
    return false;
  } else {
    return str.substring(startIndex, startIndex + minLen + 1)
  }
}

console.log(subString('this is a test string', 'isia'));

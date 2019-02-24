/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/*
 * The solution can be further optimized by using a 2D array of
 * size n, where n is the length of word s.
 * After that we will keep evaluating all the substrings using the dict, cache and the 2-D array.
 */
var wordBreak = function(s, wordDict) {
    wordDict = wordDict.sort();
    var sLen = s.length;
    var stack = [];
    var i = 0, j = 0;
    var result = false;
    while(1) {
        var subString = s.substring(i, j + 1);
        if(wordDict.indexOf(subString) > -1) {
            if(j === sLen - 1) {
                result = true;
                break;
            }
            stack.push(i);
            stack.push(j);
            j += 1
            i = j;
        } else if(j < sLen - 1) {
            j += 1;
        } else if(i + j === sLen - 1) {
            break;
        } else {
            j = stack.pop() + 1;
            i = stack.pop();
        }
    }
    return result;
};

var wordBreak2 = function(s, wordDict) {
  var wordMap = {};
  var sArr = [];
  var sLen = s.length;
  for(var i = 0; i < sLen; i++) {
    sArr.push([]);
    if(wordMap[s[i]] !== undefined) {
      sArr[i][i] = wordMap[s[i]];
    } else {
      sArr[i][i] = wordDict.indexOf(s[i]) > -1 ? true : false;
      wordMap[s[i]] = sArr[i][i];
    }
  }
};

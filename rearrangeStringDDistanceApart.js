//Rearrange a string so that all same characters become at least d distance away

console.log(reArrage('aaaabbbcc',2));

function reArrage(str, d) {
  var bow = {};
  var dist = {};
  var result = '';
  for(var i in str) {
    if(bow[str[i]]) {
      bow[str[i]] += 1;
    } else {
      bow[str[i]] = 1;
      dist[str[i]] = 0;
    }
  }

  for(var j = 0; j < str.length; j++) {
    var lastChar = result[result.length - 1];
    result += getMaxChar(bow, dist, d, lastChar)
  }
  return result;
}

function getMaxChar(bow, dist, d, lastChar) {
  lastChar = lastChar || Object.keys(bow)[0];
  for(var char in bow) {
    if(bow[lastChar] <= bow[char] && dist[char] <= 0) {
      lastChar = char
    }
  }
  dist[lastChar] = d;
  for(var char in dist) {
    dist[char] -= 1;
  }
  bow[lastChar] -= 1;
  return lastChar;
}

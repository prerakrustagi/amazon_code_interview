function altDupCharRemove(str) {
  var charMap = {};
  var retStr = '';
  for(var i in str) {
    if(!charMap[str[i]]) {
      retStr += str[i];
    }
    charMap[str[i]] = !charMap[str[i]]
  }
  return retStr;
}
console.log(altDupCharRemove('aabb abcd picabqp'))

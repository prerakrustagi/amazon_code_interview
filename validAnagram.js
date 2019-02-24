/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var sLen = s.length;
    var tLen = t.length;
    var charMap = {};
    if(sLen !== tLen) {
        return false;
    } else {
        for(var i = 0; i < sLen; i++) {
            if(!charMap[s[i]]) {
                charMap[s[i]] = 1;
            } else {
                charMap[s[i]] += 1;
            }
            if(!charMap[t[i]]) {
                charMap[t[i]] = -1;
            } else {
                charMap[t[i]] -= 1;
            }
        }
        for(var char in charMap) {
            if(charMap[char] !== 0) {
                return false;
            }
        }
        return true;
    }
};

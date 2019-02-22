/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxLen = 0;
    var sLen = s.length;
    var charMap = {};
    var sI = 0, eI = 0;
    while(eI < sLen) {
        if(!charMap[s[eI]]) {
            charMap[s[eI]] = true;
            if((eI - sI + 1) > maxLen) {
                maxLen = (eI - sI + 1);
            }
            eI += 1;
        } else {
            charMap[s[sI]] = false;
            sI += 1;
        }
    }
    return maxLen;
};

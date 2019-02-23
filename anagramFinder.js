/**
 * @param {string[]} strs
 * @return {string[][]}
 * Can be further impoved by sorting.
 */
var groupAnagrams = function(strs) {
    var res = [[strs[0]]];
    for(var i = 1; i < strs.length; i++) {
        var added = false;
        for(var j = 0; j < res.length; j++) {
            if(isAnagram(res[j][0], strs[i])) {
                res[j].push(strs[i]);
                added = true;
                break;
            }
        }
        if(!added) {
            res.push([strs[i]]);
        }
    }
    return res;
    function isAnagram(str1, str2) {
        var str1Len = str1.length;
        var str2Len = str2.length;
        if(str1Len !== str2Len) { return false; }
        if(str1Len === 0 && str2Len === 0) { return true; }
        var map = {};
        for(var i = 0; i < str1Len; i++) {
            if(map[str1[i]]) {
                map[str1[i]] += 1;
            } else {
                map[str1[i]] = 1;
            }
        }
        for(var i = 0; i < str2Len; i++) {
            if(map[str2[i]]) {
                map[str2[i]] -= 1;
                if(map[str2[i]] === 0) { delete map[str2[i]]; }
            } else {
                return false;
            }
        }
        return Object.keys(map).length === 0 ? true : false;
    }
};


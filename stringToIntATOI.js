/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var len = str.length;
    var bTrimed = false;
    var bNeg = false;
    var res = 0;
    var intMin = -2147483648;
    var intMax = 2147483647;
    for(var i = 0; i < len; i++) {
        if(!bTrimed && str[i] === ' ') {
            continue;
        } else {
            if(str[i] >= '0' && str[i] <= '9') {
                bTrimed = true;
                res = res * 10 + parseInt(str[i]);
                if(res >= 2147483648) {
                    break;
                }
            } else if(!bTrimed && (str[i] === '-' || str[i] === '+')) {
                bTrimed = true;
                bNeg = str[i] === '-' ? true : false;
            } else {
                break;
            }
        }
    }
    return bNeg ? ((res * -1 < intMin) ? intMin : res * -1)
                : (res > intMax ? intMax : res);
};

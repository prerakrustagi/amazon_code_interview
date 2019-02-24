/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var stack = [];
    var strLen = str.length;
    var start = 0;
    var bUsefulSpaceFound = false;
    for(var i = 0; i < strLen; i++) {
        if(!bUsefulSpaceFound) {
            if(str[i] === ' ') {
                start += 1;
            } else {
                bUsefulSpaceFound = true
            }
        }
        if(bUsefulSpaceFound) {
            if(str[i] === ' ' || i === strLen - 1) {
                var temp = str[i] === ' ' ? i - 1 : i;
                while(temp >= start) {
                    stack.push(str[temp]);
                    temp -= 1;
                }
                if(str[i] === ' ' && i !== strLen - 1) {
                    stack.push(str[i]);
                }
                start = i + 1;
                bUsefulSpaceFound = false;
            }
        }
    }
    if(stack[stack.length - 1] === ' ') { stack.pop(); }
    var stackLen = stack.length;
    var retStr = '';
    for(var i = 0; i < stackLen; i++) {
        retStr += stack.pop();
    }
    return retStr;
};

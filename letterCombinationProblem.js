var phNo = [9,8,1,0];

function letterComb(phNo) {
  var result = [];
  var digitMap = {
    0: [],
    1: [],
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z']
  };
  if(phNo.length !== 0) {
    letterCombRec(phNo, 0, '', result, digitMap);
  }
  return result;
};

console.log(letterComb(phNo));

function letterCombRec(digits, digitIndex, current, result, digitCharMap) {
  if(digitIndex === digits.length) {
    result.push(current);
  } else {
    var chars = digitCharMap[digits[digitIndex]];
    if(chars.length) {
      for(var i = 0; i < chars.length; i++) {
        letterCombRec(digits, digitIndex + 1, current + chars[i], result, digitCharMap);
      }
    } else {
      letterCombRec(digits, digitIndex + 1, current, result, digitCharMap);
    }
  }
}

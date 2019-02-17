// Not Working

var str_1 = 'AB';
var str_2 = 'CD';

function printInterleavingStr(str1, str2, str, i) {
  if(str1.length === 0 && str2.length === 0) {
    console.log(str);
  }
  if(str1.length !== 0) {
    str += str1[0];
    printInterleavingStr(str1.substring(1), str2, str)
  }

  if(str2.length !== 0) {
    str += str2[0];
    printInterleavingStr(str1, str2.substring(1), str)
  }
}

printInterleavingStr(str_1, str_2, '', 0)

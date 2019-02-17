var textFiller = ['a', 'b', 'c', 'd', 'e'];
var text = '';
var k = 2;
for(var i = 0; i < 1000000; i++) {
  text += textFiller[Math.floor(Math.random()*textFiller.length)];
  if(i !== 999999) { text += ' ' }
}


var bog = {};
var freqArr = [];
text = text.split(' ');
for(var j in text) {
  if(bog[text[j]]) {
    bog[text[j]] += 1;
  } else {
    bog[text[j]] = 1;
  }
}

for(var word in bog) {
  if(!freqArr[bog[word]]) {
    freqArr[bog[word]] = [word];
  } else {
    freqArr[bog[word]].push(word);
  }
}

var result = [];
for (var i = (freqArr.length - 1); i > 0; i--) {
  if(freqArr[i]) {
    while(result.length !== k && freqArr[i].length !== 0) {
      result.push(freqArr[i].pop());
    }
  }
}

console.log(result)


/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
  var stack = [];
  var i = 0
  var heightArrLen = height.length;
  var trapVol = 0;
  stack.push(i);
  i += 1;
  while(i < heightArrLen) {
    while(stack.length !== 0 && height[i] > height[stack[stack.length - 1]]) {
      var popedEl = stack.pop();
      if(stack.length === 0) { break; }
      var stackTop = stack[stack.length - 1];
      var distance = i - stackTop - 1;
      var heightDiff = Math.min(height[i] - height[popedEl], height[stackTop] - height[popedEl]);
      trapVol += heightDiff * distance;
    }
    stack.push(i);
    i += 1;
  }

  return trapVol;
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

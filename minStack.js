/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(this.minStack.length === 0) {
      this.minStack.push(x);
    } else if(this.minStack[this.minStack.length - 1] >= x) {
        this.minStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var el = this.stack.pop();
    if(el !== undefined && el === this.getMin()) {
        this.minStack.pop();
    }
    console.log(this.minStack);
    return el;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};


var obj = new MinStack();
obj.push(2);
obj.push(0);
obj.push(3);
obj.push(0);
console.log(obj.getMin())
obj.pop();
console.log(obj.getMin())
obj.pop();
console.log(obj.getMin())
obj.pop();
console.log(obj.getMin())


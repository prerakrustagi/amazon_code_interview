/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    var arr = [];
    var queue = [];
    if(root) { queue.push({node: root, level: 0}); }
    var currEl, currNode, currLevel, nextEl, nextNode, nextLevel;
    while(queue.length !== 0 || nextEl) {
        currEl = nextEl || queue.shift();
        nextEl = queue.shift();
        currNode = currEl ? currEl.node : undefined;
        currLevel = currEl ? currEl.level : undefined;
        nextNode = nextEl ? nextEl.node : undefined;
        nextLevel = nextEl ? nextEl.level : undefined;
        if(!nextNode || nextLevel > currLevel) {
            arr.push(currNode.val);
        }
        if(currNode.left) {
            queue.push({node: currNode.left, level: currLevel + 1});
        }
        if(currNode.right) {
           queue.push({node: currNode.right, level: currLevel + 1});
        }
    }
    return arr;
};

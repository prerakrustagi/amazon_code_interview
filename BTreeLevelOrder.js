/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var res = [];
    var queue = [];
    if(root) {
        queue.push({node: root, level: 0});
        while(queue.length !== 0) {
            var el = queue.shift();
            var elLevel = el.level;
            var elNode = el.node;
            if(!res[elLevel]) {
                res[elLevel] = [];
            }
            res[elLevel].push(elNode.val);
            if(elNode.left) {
                queue.push({node: elNode.left, level: elLevel + 1});
            }
            if(elNode.right) {
                queue.push({node: elNode.right, level: elLevel + 1});
            }
        }
    }
    return res;

};

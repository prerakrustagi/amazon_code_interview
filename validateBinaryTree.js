/**
 * Definition for a binary tree node.
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const MIN_VAL = -1000000000;
const MAX_VAL = 1000000000;
var isValidBST = function(root) {
    return check(root, MIN_VAL, MAX_VAL);
};

function check(node, minAllowed, maxAllowed) {
    if(node === null) {
        return true;
    } else {
        if(node.val >= minAllowed && node.val <= maxAllowed) {
            if(!node.left && !node.right) { return true; }
            else if (node.left && node.right) {
                return check(node.left, minAllowed, node.val) &&
                       check(node.right, node.val, maxAllowed);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var min = p.val > q.val ? q.val : p.val;
    var max = p.val > q.val ? p.val : q.val;
    if(root.val >= min && root.val <= max) {
        return root;
    } else if(root.val >= max) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return lowestCommonAncestor(root.right, p, q);
    }
};

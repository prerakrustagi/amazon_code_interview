/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var result = [];
    serializeHelper(root, result);
    return result;
    function serializeHelper(root, arr) {
        if(root === null) {
            arr.push('null');
        } else {
            arr.push(root.val);
            serializeHelper(root.left, arr);
            serializeHelper(root.right, arr);
        }
    }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    console.log(data);
    return deserializeHelper(data, 0, data.length).node;

    function deserializeHelper(dataArr, index, n) {
        if(index === n - 1 || dataArr[index] === 'null') {
            return { node: null, index: index + 1 };
        } else {
            var node = new TreeNode(dataArr[index]);
            index += 1;
            var leftRes = deserializeHelper(dataArr, index, n);
            node.left = leftRes.node;
            index = leftRes.index;
            var rightRes = deserializeHelper(dataArr, index, n);
            node.right = rightRes.node;
            index = rightRes.index;
            return { node: node, index: index };
        }
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

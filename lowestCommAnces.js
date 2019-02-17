function Tree(val, left, right) {

  return {
    val: val || null,
    left: left || null,
    right: right || null
  }
}

function findLowestCommonAncestor(val1, val2, root) {
  if(root === null) { return null; }
  if(root.val === val1 || root.val === val2) { return root; }
  var left = findLowestCommonAncestor(val1, val2, root.left);
  var right = findLowestCommonAncestor(val1, val2, root.right);
  if(left && right) { return root; }
  if(left === null && right === null) { return null; }
  return left !== null ? left : right;
}

var a =           Tree(1,
      Tree(2,
  Tree(4), Tree(5,
      Tree(6), Tree(7))),
                            Tree(3));

console.log(findLowestCommonAncestor(4,7,a).val);

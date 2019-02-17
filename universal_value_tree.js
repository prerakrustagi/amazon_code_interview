function Tree(val, left, right) {

  return {
    val: val || null,
    left: left || null,
    right: right || null
  }
}

function countUniTrees(root) {
  if(root === null) {
    return [0, true];
  }
  var leftResult = countUniTrees(root.left);
  var rightResult = countUniTrees(root.right);
  var isUniTree = true;
  if(!leftResult[1] || !rightResult[1]) {
    isUniTree = false;
  }
  if (root.left !== null && root.left.val !== root.val) {
    return false;
  }
  if(root.right !== null && root.right.val !== root.val) {
    return false;
  }
  var totalCount;
  if(isUniTree) {
    return [leftResult[0] + rightResult[0] + 1, true];
  } else {
    return [leftResult[0] + rightResult[0], false];
  }
}

var a = Tree(5, Tree(5), Tree(5));
console.log(countUniTrees(a));

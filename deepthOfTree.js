function Node(val, left, right) {
  return {
    val: val || null,
    left: left || null,
    right: right || null
  }
}

var tree = Node(1, Node(2, Node(4), Node(5, null, Node(10, null, Node(11, null, Node(12))))), Node(3, Node(6, null, Node(8)), Node(7, null, Node(9, null, Node(10)))));

function getDepth(node) {
  if(node === null) { return 0; }
  if(node.left === null && node.right === null) {
    // node is the leaf node
    return 1;
  }
  var left = getDepth(node.left);
  var right = getDepth(node.right);

  return left > right ? left + 1 : right + 1;
}

console.log(getDepth(tree));

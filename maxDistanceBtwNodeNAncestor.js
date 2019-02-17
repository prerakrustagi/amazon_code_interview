function Node(val, left, right) {
  return {
    val: val || null,
    left: left || null,
    right: right || null
  };
}

function maxDistance(node, options) {
  if(node === null) {
    return 10000000;
  }
  if(node.left === null && node.right === null) {
    return node.val;
  }

  var minChild = Math.min(maxDistance(node.left, options), maxDistance(node.right, options));
  options.result = Math.max(node.val - minChild, options.result);

  return Math.min(minChild, node.val);
}

var tree = Node(10, Node(20, Node(1), Node(2)), Node(4, Node(5), Node(9)))

var options = {
  result: 0
};
maxDistance(tree, options);
console.log(options);

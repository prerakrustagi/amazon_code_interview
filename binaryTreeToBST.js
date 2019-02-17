function Node(val, left, right) {
  return {
    val: val || null,
    left: left || null,
    right: right || null
  }
}

var inorderArr = [];
var tree = Node(10, Node(2, Node(8), Node(4)), Node(7));

function createInorderArrFromTree(node, inorderArr) {
  if(node === null) { return; }
  createInorderArrFromTree(node.left, inorderArr);

  inorderArr.push(node.val);

  createInorderArrFromTree(node.right, inorderArr);
}
createInorderArrFromTree(tree, inorderArr);

inorderArr.sort(function(a,b) { return a-b; });

createTreeFromSortedArr(tree, inorderArr);

console.log(tree);

function createTreeFromSortedArr(node, inorderArr) {
  if(node === null) { return; }
  createTreeFromSortedArr(node.left, inorderArr);

  node.val = inorderArr.shift();

  createTreeFromSortedArr(node.right, inorderArr);
}


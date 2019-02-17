function Node(val, left, right) {
  return {
    val: val || null,
    left: left || null,
    right: right || null
  }
}

var tree = Node(1, Node(2, Node(4), Node(5)), Node(3, Node(6, null, Node(8)), Node(7, null, Node(9))));

function findMinMax(node, min, max, hd) {
  if(node === null) {
    return {
      min: min,
      max: max
    };
  }
  if(hd < min) {
    min = hd;
  } else if (hd > max) {
    max = hd;
  }
  left = findMinMax(node.left, min, max, hd - 1)
  right = findMinMax(node.right, left.min, left.max, hd + 1)
  return {
    min: right.min,
    max: right.max
  }
}

function printVertical(node, lineNo, hd) {
  if(node === null) { return; }
  if(hd === lineNo) {
    console.log(node.val)
  }
  printVertical(node.left, lineNo, hd - 1);
  printVertical(node.right, lineNo, hd + 1);
}

var x = findMinMax(tree, 0, 0 , 0);
for(var lineNo = x.min; lineNo <= x.max; lineNo++) {
  printVertical(tree, lineNo, 0);
  console.log('');
}

//Incomplete


function Node(val, next) {
  return {
    val: val || null,
    next: next: || null
  }
}

var a = Node('a', Node('b', Node('c', Node('d', Node('e', Node('f', Node('g', Node('h', Node('i', Node('j', Node('k', Node('l', null))))))))))));

var groupSize = 3;

reverseNodeLL(a, groupSize);

function reverseNodeLL(startNode, groupSize) {
  var pointer = startNode;
  var newStart, nextGrpStartNode, q;

  for(var i = 1; i < k; i++) {
    if(pointer.next === null) {
      return startNode;
    }
    pointer = pointer.next;
  }
  // End of first group

  newStart = pointer; // Pointer is pointing to the new start / end of this group before reversing
  q = newStart; //

  while(1) {
    pointer = startNode; // Pointer goes back to the start of list to reverse the first group
    nextGrpStartNode = q.next; // next group's start node saved
    if(nextGrpStartNode === null) { // If there is no next group
      reverse(pointer); // Reverse the first and return it
      return newStart;
    }
    q.next = null; // Make first group a separate linked list
    q = nextGrpStartNode; // Move to next groups start
    startNode = nextGrpStartNode; // Make startNode also point to next group's starting node.
    for(var i = 1; i < k; i++) { // Go to the end of
      if(nextGrpStartNode.next === null) {
        // Handle next group not complete
        return startNode;
      }
      nextGrpStartNode = nextGrpStartNode.next;
    }
    pointer = reverse(pointer);
    pointer.next = nextGrpStartNode;
    q = nextGrpStartNode;
  }

}

function reverse(node) {
  if(node === null) { return; }
  if(node.next === null) { return; }
  reverse(node.next);
  node.next.next = node;
  node.next = null;
  return node;
}

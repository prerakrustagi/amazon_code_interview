
//  Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var returnNode = new ListNode();
    var currNode = returnNode;
    var carry = 0;
    while(l1 !== null || l2 !== null) {
        var l1Val = 0, l2Val = 0;
        if(l1) { l1Val = l1.val; }
        if(l2) { l2Val = l2.val; }
        currNode.val = ((l1Val + l2Val + carry) % 10);
        carry = Math.floor((l1Val + l2Val + carry) / 10);
        if(l1) { l1 = l1.next; }
        if(l2) { l2 = l2.next; }
        if(l1 || l2) {
            currNode.next = new ListNode();
            currNode = currNode.next;
        }
    }
    if(carry) {
        currNode.next = new ListNode(carry);
    }
    return returnNode;
};

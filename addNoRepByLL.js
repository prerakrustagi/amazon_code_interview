function List(val, next) {
  return {
    val: val || null,
    next: next || null
  }
}

// Add two numbers represented by linked lists
function addLL(list1, list2) {
  var sum = 0;
  var iteration = 0;
  while(list1 !== null || list2 !== null) {
    if(list1 !== null) {
      sum += (list1.val * Math.pow(10,iteration));
      list1 = list1.next;
    }
    if(list2 !== null) {
      sum += (list2.val * Math.pow(10,iteration));
      list2 = list2.next;
    }
    iteration += 1;
  }
  var returnList = List();
  var temp = returnList;
  while(sum !== 0) {
    var value = sum % 10;
    temp.val = value;
    sum = Math.floor(sum / 10);
    temp.next = List();
    temp = temp.next;
  }
  return returnList;
}

a = List(3,List(4,List(5)));
b = List(3,List(4,List(4)));

console.log(addLL(a, b));

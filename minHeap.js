var arr = [15, 10, 20, 30, 3, 9, 1];
var minHeap = [];

function pushMinHeap(node) {
  minHeap.push(node);
  var currIndex = minHeap.length;
  var parentIndex = Math.floor(currIndex / 2);
  while(parentIndex !== 0) {
    if(minHeap[parentIndex - 1] > minHeap[currIndex - 1]) {
      minHeap[parentIndex - 1] =
        (minHeap[parentIndex - 1] + minHeap[currIndex - 1]) - (minHeap[currIndex - 1] = minHeap[parentIndex - 1]);
      currIndex = parentIndex;
      parentIndex = Math.floor(currIndex / 2);
    } else {
      break;
    }
  }
  console.log(minHeap);
}

function popMinHeap() {
  var firstNode = minHeap[0];
  var lastNode = minHeap.pop();
  var heapLen = minHeap.length;
  if(heapLen === 0) {
    console.log(minHeap);
    return firstNode;
  }
  minHeap[0] = lastNode;
  var currIndex = 1;
  while(currIndex < heapLen) {
    var smallerChildIndex = minHeap[currIndex * 2] > minHeap[currIndex * 2 - 1] ? currIndex * 2 : currIndex * 2 + 1
    if(minHeap[currIndex - 1] > minHeap[smallerChildIndex - 1]) {
      minHeap[currIndex - 1] =
        (minHeap[currIndex - 1] + minHeap[smallerChildIndex - 1]) -
        (minHeap[smallerChildIndex - 1] = minHeap[currIndex - 1]);
      currIndex = smallerChildIndex;
    } else {
      break;
    }
  }
  console.log(minHeap);
  return firstNode;
}

for(var i in arr) {
  pushMinHeap(arr[i]);
}

popMinHeap();
popMinHeap();
popMinHeap();
popMinHeap();
popMinHeap();
popMinHeap();
popMinHeap();

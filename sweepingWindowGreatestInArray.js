function printKMax(arr, k) {
  var dequeue = [];
  var len = arr.length;
  var i;
  var result = [];
  for(i = 0; i < k; i++) {
    while(!(dequeue.length === 0) && arr[i] > arr[dequeue[dequeue.length - 1]]) {
      dequeue.pop();
    }
    dequeue.push(i);
  }

  for(i = k; i < len; i++) {
    result.push(dequeue[0]);

    while(!(dequeue.length === 0) && (dequeue[0] <= i - k) ) {
      dequeue.splice(0, 1);
    }

    while(!(dequeue.length === 0) && arr[i] > arr[dequeue[dequeue.length - 1]]) {
      dequeue.pop();
    }

    dequeue.push(i);
  }
  result.push(dequeue[0]);
  console.log(result.join(','))
}

printKMax([12, 1, 78, 90, 57, 67, 56], 3);

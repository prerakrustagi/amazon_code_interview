var arr2D = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
]

var i, m = 3, n = 5, startRow = 0, startCol = 0;
var temp = [];
while( startCol < n && startRow < m) {
  for(i = startCol; i < n; i++) {
    temp.push(arr2D[startRow][i]);
  }
  startRow += 1;

  for(i = startRow; i < m; i++) {
    temp.push(arr2D[i][n-1])
  }
  n -= 1;

  if(startRow < m) {
    for(i = n-1; i >= startCol; i--) {
      temp.push(arr2D[m-1][i]);
    }
    m -= 1;
  }

  if(startCol < n) {
    for(i = m-1; i >= startRow; i--) {
      temp.push(arr2D[i][startCol]);
    }
    startCol += 1;
  }
}
console.log(temp.join(','))

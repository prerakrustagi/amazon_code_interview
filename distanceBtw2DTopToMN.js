var a = [
  [1, 2, 3],
  [4, 8, 2],
  [1, 5, 3]
]

function minCost(arr, m, n) {
  var dist = [];
  for(var i = 0; i <= m; i++) { dist.push([]); }

  dist[0][0] = arr[0][0];

  for(var i = 1; i <= n; i++) {
    dist[i][0] = dist[i-1][0] + arr[i][0];
  }

  for(var i = 1; i <= m; i++) {
    dist[0][i] = dist[0][i-1] + arr[0][i];
  }

  for (var i = 1; i <= m; i++) {
    for(var j = 1; j <= n; j++) {
      dist[i][j] = Math.min(arr[i][j] + dist[i-1][j-1], arr[i][j] + dist[i][j-1], arr[i][j] + dist[i-1][j]);
    }
  }
  return dist[m][n];
}

console.log(minCost(a, 2, 2))

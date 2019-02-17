var a = [
  ['1','1','1','0'],
  ['1','0','0','1'],
  ['0','1','0','1'],
  ['1','1','0','0']
]

function getNoOfIsland(grid) {
  if(!grid || grid.length === 0) {
    return 0;
  }
  var noOfIsland = 0;
  for(var rowIndex in grid) {
    for(var colIndex in grid[rowIndex]) {
      if(grid[rowIndex][colIndex] === '1') {
        var b = findNeighbours(grid, rowIndex, colIndex);
        noOfIsland += b;
      }
    }
  }
  return noOfIsland;
}


function findNeighbours(grid, rowIndex, colIndex) {
  if(rowIndex < 0 || rowIndex >= grid.length || colIndex < 0 || colIndex >= grid[rowIndex].length ||
    grid[rowIndex][colIndex] === '0')
  {
    return 0;
  } else {
    grid[rowIndex][colIndex] = '0';
    findNeighbours(grid, rowIndex - 1, colIndex);
    findNeighbours(grid, 1 + parseInt(rowIndex), colIndex);
    findNeighbours(grid, rowIndex, colIndex - 1);
    findNeighbours(grid, rowIndex, 1 + parseInt(colIndex));
    return 1;
  }
}

console.log(getNoOfIsland(a));

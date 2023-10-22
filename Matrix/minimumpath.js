

var minPathSum = function (grid) {
  
    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[0].length; j++)
         
            if (i == 0 && j == 0)
                continue
    
            else if (i == 0)
                grid[i][j] += grid[i][j - 1];
          
            else if (j == 0)
                grid[i][j] += grid[i - 1][j];
         
            else
             
                if (grid[i][j] + grid[i][j - 1] < grid[i][j] + grid[i - 1][j])
                    grid[i][j] += grid[i][j - 1];
            
                else
                    grid[i][j] += grid[i - 1][j];
  
    return grid[grid.length - 1][grid[0].length - 1];
};


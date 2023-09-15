var generate = function(numRows) {
    var i = 0;
    var j = 0;
   
    var res = [];
   
    for (i = 0; i < numRows; i++) {
        res.push(Array(i + 1));       
        for (j = 0; j <= i; j++) {
          
            if (j === 0 || j === i) {
                res[i][j] = 1;
            }
            else {
             
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
            }
        }
    }
    return res;     
};

const pascalTriagleResult = generate(5);

console.log(pascalTriagleResult)
// output [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
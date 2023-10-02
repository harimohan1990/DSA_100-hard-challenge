
var rotate = function(matrix) {
    //to find transpose:
    /*
    1 2 3      1 4 7
    4 5 6  =>  2 5 8
    7 8 9      3 6 9
    */
    for(let i=0;i<matrix.length;i++){
        for(let j=i;j<matrix.length;j++){
            let temp=matrix[i][j];
            matrix[i][j]=matrix[j][i];
            matrix[j][i]=temp;
        }
    }
    //to reverse the array:
    /*
    1 2 3      7 4 1
    4 5 6  =>  8 5 2
    7 8 9      9 6 3
    */
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix.length/2;j++){
            let temp=matrix[i][j];
            matrix[i][j]=matrix[i][matrix.length-1-j];//middle element remains the same in the case of the first example.
            matrix[i][matrix.length-1-j]=temp;
        }
    }
    return matrix;

};


console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))

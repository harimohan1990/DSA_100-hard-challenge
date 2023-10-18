var longestValidParentheses = function(s) {
    var length =0
    var index =[]
    index.push(-1)

    for(i=0;i<s.length;i++){
        if(s[i] == '('){
            index.push(i)
        }else{
            index.pop()
            if(index.length>0){
                length = Math.max(length, i-index[index.length-1])
            }else{
                index.push(i)
            }
        }
    }
    return length
};


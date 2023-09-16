/**
 * @param {number[]} prices
 * @return {number}
 Complexity
Time complexity: O(n)

Space complexity: O(1)
 */


var maxProfit = function(prices) {
    let buy = 100000;
    let maxProfit  = 0;
    for(let i=0; i < prices.length; i++){
        if(buy > prices[i]){
         buy = prices[i]
        // maxProfit = 0;
        }else{
            if(maxProfit < (prices[i] - buy)){
           maxProfit = prices[i] - buy
            }
        }
    }
    return maxProfit;
};
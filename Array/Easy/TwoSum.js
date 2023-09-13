https://leetcode.com/problems/two-sum/


var twoSum = function(nums, target) {
    let mp = new Map();
     
     for(let i=0;i<nums.length;i++){
         let diff = target -nums[i];

         if(mp.has(diff)){
             return [i,mp.get(diff)]
         }
     
     mp.set(nums[i],i)
     }
};
const twoSumResult = twoSum([2,7,11,15],9);

console.log(twoSumResult) // output [1, 0]
//Input: nums = [2,7,11,15], target = 9
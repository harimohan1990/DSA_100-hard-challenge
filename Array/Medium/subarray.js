var subarraySum = function(nums, k) {
    let counter = 0;
   for (let i=0;i<nums.length;i++) {
       let base = 0;
       for (let j=i;j<nums.length;j++) {
           base+=nums[j]; //similar to this  base = base + nums[j]
           if (base == k) counter++;
       }
   }
   return counter;
};
/**
 * leetcode : 26
 * Author : Abrar
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //let set = new Set(nums)
    //const arr = Array.from(set)
   //for(let i=0; i<nums.length;i++){
    // nums[i]=arr[i]
  // }
   //nums.length= arr.length;
   //return arr.length
   if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

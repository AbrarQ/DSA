/**
 * lletcode-26
 * Author : Abrar
 * This is very simple we make a set of given nums, then convert it into array as we have to
 * manipulte the original array we make changes to that
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let set = new Set(nums)
    const arr = Array.from(set)
   for(let i=0; i<nums.length;i++){
     nums[i]=arr[i]
   }
   nums.length= arr.length;
   return arr.length
};
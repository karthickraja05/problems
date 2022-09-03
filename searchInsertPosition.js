// Problem Link
// https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let len = nums.length;
  for(let i = 0; i < len; i++){
      if(nums[i] == target){
          return i;
      }else if(nums[i] > target){
          return i;
      }
  }
  return len;
};

let nums = [1,3,5,6]

let result = searchInsert(nums,8);

console.log(result)
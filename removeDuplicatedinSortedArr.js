// Problem Link
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let len = nums.length;  
  let count = 0;
  let previous = '';
  let fitIndexArr = [];
  for(let i = 0; i < len; i++){
    if(nums[i] === previous){
      previous = nums[i];
      nums[i] = '_';
      fitIndexArr.push([i]);
    }else{
      ++count;
      previous = nums[i];
      if(fitIndexArr.length != 0){
        let temp_arr = fitIndexArr.shift();
        nums[temp_arr[0]] = nums[i];
        if(temp_arr[0] != i){
          nums[i] = '_';
          fitIndexArr.push([i]);
        }
      }
    }
  }
  console.log(nums);
  return count;
};

// let test = [1,1,2,4,4,7,7,8];
let test = [0,0,1,1,1,2,2,3,3,4];
// let test = [1,1,2];
let output = removeDuplicates(test);

console.log(output);
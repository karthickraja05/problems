// Problem Link
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let len = nums.length;  
  let count = 0;
  let fitIndexArr = [];
  for(let i = 0; i < len; i++){
    if(nums[i] === val){
      nums[i] = '_';
      fitIndexArr.push([i]);
    }else{
      ++count;
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

let test = [0,1,2,2,3,0,4,2];
// let test = [1,1,2];
let output = removeElement(test,2);

console.log(output);
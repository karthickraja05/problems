// Problem Link
// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var n = nums.length;
    for(i=0; i < n-2 ; i++){
        for(j = i+1;j < n -1;j++){
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
        }
    }
    return [];
};

// sample i/o = [2,7,11,15],9
// Expected o/p = [0,1]
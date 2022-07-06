// Problem Link
// https://leetcode.com/problems/single-number/

var singleNumber = function(nums) {
    let n = nums.length;
    if(n == 1){
        return nums[0];
    }
    let new1 = [];
    // nums.sort((a, b) => a - b);
    for(let i = 0; i < n; i++){
        
        if(new1.includes(nums[i])){
            let index = new1.indexOf(nums[i]);
            new1.splice(index,1);
        }else{
            new1.push(nums[i]);
        }
        
    }
    
    return new1[0];
};

let arr = [2,2,1];
singleNumber(arr);
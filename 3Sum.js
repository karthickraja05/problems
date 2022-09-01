// Problem Link
// https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
    let n = nums.length;
    
    if(n <= 2){
        return [];
    }else if(n == 3){
        
        let val = nums[0] + nums[1] + nums[2];
        if(val === 0){
            return [nums];
        }else{
            return [];
        }
    }
    nums.sort((a,b) => a - b);
    
    let result = [];
    
    for(let i = 0; i < n - 2; i++){
        if(nums > 0){
            break;
        }
        if(nums[i] !== nums[i - 1]){
            b = i + 1; 
            c = n - 1; 
            
            while(b !== c && c > b){
                
                
                let temp = nums[i] + nums[b] + nums[c];
                
                // console.log(result);
                if(temp === 0){
                    result.push([nums[i] , nums[b] , nums[c]]);
                    while(b < n - 1){
                        if(nums[b] !== nums[b + 1]){
                            b++;
                            break;
                        }else{
                            b++;
                        }
                    }
                    while(i < c){
                        if(nums[c] !== nums[c - 1]){
                            c--;
                            break;
                        }else{
                            c--;
                        }
                    }
                    
                }else if(temp < 0){
                    while(b < n - 1){
                        if(nums[b] !== nums[b + 1]){
                            b++;
                            break;
                        }else{
                            b++;
                        }
                    }
                    
                }else if(temp > 0){
                     while(i < c){
                        if(nums[c] !== nums[c - 1]){
                            c--;
                            break;
                        }else{
                            c--;
                        }
                    }
                }
                
                if(b === c){
                    break;
                }
            }
            
            
        }
    }
    
    return result;
};

let re = threeSum3(test);
console.log(re);
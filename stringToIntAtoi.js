// Problem Link
// https://leetcode.com/problems/string-to-integer-atoi/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
   var trimString = s;
    var len = trimString.length;
    var positive = true;
    var changed = false;
    var changed1 = false;
    var changed2 = false;
    var val = 0;
    for(let i = 0 ; i < len ; i++){
        let temp = parseInt(trimString[i]);
        if(trimString[i] === ' '){
            changed2 = changed1 ? true : false;
            continue;
        }
        
        if(changed2){
            break;
        }
        
        if(temp || temp == 0 || trimString[i] == '-' || trimString[i] == '+'){
            if(trimString[i] == '-' || trimString[i] == '+'){
                if(changed === false){
                    changed = true;
                }else{
                    break;
                }
                if(trimString[i] == '-'){
                    positive = false;
                }
                changed1 = true;
            }else{
                changed = true;
                changed1 = true;
                val = val * 10 + temp;
            }
        }else{
            break;
        }
        
        //if(trimString[i] === '-')
    }
    if(!positive){
        val *= -1;
    }
    if(-Math.pow(2,31) > val){
        return -Math.pow(2,31);
    }else if((Math.pow(2,31) - 1) < val){
        return Math.pow(2,31) - 1;
    }else{
        return val;
    }
};

// sample i/o

// "42"
// "   -42"
// "4193 with words"


// Expected o/p 


// 42
// -42
// 4193
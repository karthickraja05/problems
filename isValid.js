// Problem Link
// https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
    n = s.length;
    
    if(n === 1){
        return false;
    }
    
    var stack = [];
    
    for(i = 0 ; i < n ; i ++){
        if(s[i] === '[' || s[i] == '{' || s[i] == '('){
            stack.push(s[i]);
        }else{
            if(stack.length === 0){
                return false;
            }
            var last = stack.pop();
            if(s[i] === ')'){
                if(last !== '('){
                    return false;
                }
            }else if(s[i] === ']'){
                if(last !== '['){
                    return false;
                }
            }else if(s[i] === '}'){
                if(last !== '{'){
                    return false;
                }
            }
            
        }
    }
    if(stack.length === 0){
        return true;    
    }else{
        return false;
    }
};
// sample i/o = 

/*"()"
"()[]{}"
"(]"*/


// Expected o/p 

/*true
true
false*/
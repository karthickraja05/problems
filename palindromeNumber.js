// Problem Link
// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
/**
 * @param {number} x
 * @return {boolean}
 */

// Solution 1

 var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x.length === 1) return true;
    
    let y = 0;
    let z = x;
    while(x > 0){
        let w = x % 10;
        y = y * 10 + w;
        x = (x - w) / 10;
    }
    
    return z == y;
};

// Solution 2

var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x.length === 1) return true;
    
    
    x = x.toString();
    var len = x.length;
    var center = Math.floor(len / 2);
    var end,begin;
    if(len % 2 === 1){
        begin = center;
        end = center;
    }else{
        end = center;
        begin = center - 1;
    }
    
    return checkPalindrome(begin,end,x);
};


var checkPalindrome = function(begin,end,string){
    while(begin >= 0 && end < string.length && string[begin] == string[end] ){
        begin--;
        end++;
    }
    return string[begin] == string[end];
}


// sample i/o = 121, -121 
// Expected o/p = true, false
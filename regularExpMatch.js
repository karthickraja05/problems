// Problem Link
// https://leetcode.com/problems/regular-expression-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var n1 = s.length;
    var n2 = p.length;
    
    var star = p.includes('*');
    
    if(n1 !== n2 && !star) return false;
    var startPresent = false;
    var j = 0;
    for(let i = 0; i < n1; i++){
        if(s[i] !== p[j] && p[j] !== '.'){
            if(!startPresent){
                if(p[j] === '*'){
                    startPresent = true;
                    j++;
                }else{
                    return false;
                }
            }else{
                if(p[j] === '*'){
                    startPresent = true;
                    j++;
                }
            }
            
        }else{
            j++;
        }
    }
    
    return true;
    
    
};


var res = isMatch('aaaaaa','a.*aa');
console.log(res);
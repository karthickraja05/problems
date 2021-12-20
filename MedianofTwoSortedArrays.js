// Problem Link
// https://leetcode.com/problems/median-of-two-sorted-arrays/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s == '') return 0;
    var n = s.length;
    var result = 1;
    var nonRepeatStr = '';
    for(i = 0; i < n; i++){
        let index = nonRepeatStr.indexOf(s[i]);
        if(index !== -1){
            let len = nonRepeatStr.length;
            result = result < len ? len : result;
            nonRepeatStr = nonRepeatStr.slice(index+1);
        }
        nonRepeatStr += s[i];
    }
    let len = nonRepeatStr.length;
    return result < len ? len : result;
};
// Problem Link
// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  let newWordArr = s.split(' ');
  for(let i = newWordArr.length - 1; i >= 0; i--){
      if(newWordArr[i] !== ''){
          return newWordArr[i].length;
      }
  }
};
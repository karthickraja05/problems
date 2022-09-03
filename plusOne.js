// Problem Link
// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let stringWord = digits.join('');
    stringWord = BigInt(stringWord);
    ++stringWord;
    stringWord = String(stringWord);
    return stringWord.split('');
};
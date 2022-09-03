// Problem Link
// https://leetcode.com/problems/add-binary/


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
      let num1 = BigInt('0b'+a);
      let num2 = BigInt('0b'+b);
      let sum = num1 + num2;
      return String(sum).toString(2);    
};

let a  = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
let b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
let d = "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000";
addBinary(a,b);
// let vb = parseInt(d,2);
let vb = BigInt('0b'+d);
console.log(vb);
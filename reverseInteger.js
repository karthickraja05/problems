// Problem Link
// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     if(x === 0) return 0;
    var a1 = x.toString().split('');
    var return_val;
    if(a1[0] === '-'){
        var shiftEle = a1.shift();
        return_val = `${shiftEle}${a1.reverse().join('')}`;
    }else{
        return_val = a1.reverse().join('');
    }
    return_val = parseInt(return_val);
    var bitVal = Math.pow(2,31);
    if(return_val > (bitVal - 1) || return_val < -(bitVal)){
        return 0;
    }else{
        return return_val;
    }
};

// sample i/o = 1534236469, 123, -232,-120
// Expected o/p = 0,321,-232,21
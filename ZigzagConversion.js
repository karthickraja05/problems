// Problem Link
// https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) return s;
    var len = s.length;
    var row = 0;
    var array = [];
    var i = 0;
    var maxLimit = numRows - 1;
    var flowDirection = true;
    while(len > i){
        if(!array[row]){
            array.push('');
        }
        array[row] += s[i];
        
        if(row === maxLimit){
            flowDirection = false;
        }else if(row === 0){
            flowDirection = true;
        }
        
        if(flowDirection){
            row++;
        }else{
            row--;
        }
        i++;
    }
    return array.join('');
};


/*
i/o:

"PAHNAPLSIIGYIR"
3
"PAYPALISHIRING"
4
"A"
1
*/

/*
o/p:

"PAIIANPSIYRHLG"
"PINALSIGYAHRPI"
"A"
*/
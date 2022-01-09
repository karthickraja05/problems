// Problem Link
// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanDict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    var arr = s.split('');
    var len = arr.length;
    var previousNum = [0, 0];
    var sum = 0;
    for (let i = 0; i < len; i++) {
        let temp = romanDict[arr[i]];
        if (previousNum[1] != 0 && temp > previousNum[1]) {
            sum += temp - (previousNum[1] * 2);
            previousNum[1] = temp;
            previousNum[0] = arr[i];
        } else {
            previousNum[1] = temp;
            previousNum[0] = arr[i];
            sum += temp;
        }
    }

    return sum;
};


/*
input:
"III"
"LVIII"
"MCMXCIV"
*/

/*
output:
3
58
1994
*/
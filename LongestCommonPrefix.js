// Problem Link
// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var n = strs.length;
    var result = "";
    for (var i = 0; i < n; i++) {
        if(i == 0){
            result = strs[0];
            continue;
        }
    
        // console.log(strs[i].length);
        var temp = strs[i];
        var n1 = strs[i].length > result.length ? result.length : strs[i].length; 
        final = "";
        for(var j = 0; j < n1; j++){
            if(temp[j] == result[j]){
                final += temp[j];
            }else{
                break;
            }
        }
        
        if(final == ""){
            return "";
        }else{
            result = final;
        }

    }
    return result;
};


var arr = ["flower","flow","flight","flowlight","flowiss","car"];

longestCommonPrefix(arr);




/*
input:
["flower","flow","flight","flowlight","flowiss","car"]
["dog","racecar","car"]
["flower","flow","flight","flowlight","flowiss"]
*/

/*
output:
""
""
"fl"
*/
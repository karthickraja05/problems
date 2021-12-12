// Problem Link
// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    if(!(root && root.val != null)) return 0;
    var leftArr = root.left ? getBinaryString(root.left) : [];
    var rightArr = root.right ? getBinaryString(root.right) : [];
    
    if(!root.left && !root.right){
        return parseInt(root.val,2);
    }
    var result = [];
    leftArr.forEach(item=>{
        result.push(`${root.val}${item}`);
    });

    rightArr.forEach(item=>{
        result.push(`${root.val}${item}`);
    });

    var value = 0;

    result.forEach(item=>{
        value += parseInt(item,2);
    });

    return value;
};

var getBinaryString = function(root){
    if(!(root && root.val != null)) return 0;
    var leftArr = root.left ? getBinaryString(root.left) : [];
    var rightArr = root.right ? getBinaryString(root.right) : [];

    if(!root.left && !root.right){
        return [ `${root.val}` ];
    }
    var result = [];
    leftArr.forEach(item=>{
        result.push(`${root.val}${item}`);
    });

    rightArr.forEach(item=>{
        result.push(`${root.val}${item}`);
    });
    return result;
}


// Input: root = [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

// Input: root = [1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0]
// Output: 194

// Input: root = [1]
// Output: 1


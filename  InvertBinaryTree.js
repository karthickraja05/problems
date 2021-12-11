// Problem Link
// https://leetcode.com/problems/invert-binary-tree/

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
 * @return {TreeNode}
*/
// Recurssion Method;
var invertTree = function(root) {
    if(!(root && root.val != null)) return null;
    var temp = root.left ? invertTree(root.left) : null;
    root.left = root.right ? invertTree(root.right) : null;
    root.right = temp;
    return root;
};


// with out Recurssion Method, iteration Stack;
var invertTree = function(root) {
    
    if(!(root && root.val != null)) return null;
    var stack = [root];
    while(stack.length > 0){
        ele = stack.pop();
        var temp = ele.left;
        ele.left = ele.right ? ele.right : null;
        ele.right = temp ? temp : null;
        if(ele.right) stack.push(ele.right);
        if(ele.left) stack.push(ele.left);
    }

    return root;
};

// with out Recurssion Method, iteration Queue;
var invertTree = function(root) {
    
    if(!(root && root.val != null)) return null;
    var queue = [root];
    while(queue.length > 0){
        ele = stack.shift();
        var temp = ele.left;
        ele.left = ele.right ? ele.right : null;
        ele.right = temp ? temp : null;
        if(ele.right) stack.push(ele.right);
        if(ele.left) stack.push(ele.left);
    }

    return root;
};


// sample i/o = [25,15,50,10,22,35,70,4,12,18,24,31,44,66,90,90,100,null,89,47,90,null,null,null,9]
// Expected o/p = [25,50,15,70,35,22,10,90,66,44,31,24,18,12,4,null,null,null,null,null,null,9,null,null,null,90,47,89,null,100,90]

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
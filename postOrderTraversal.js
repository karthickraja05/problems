// Problem Link
// https://leetcode.com/problems/binary-tree-postorder-traversal/

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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(!(root && root.val != null)) return [];

    var leftEle = postorderTraversal(root.left);
    var rightEle = postorderTraversal(root.right);

    return [...leftEle,...rightEle,root.val];
};

// sample i/o = [25,15,50,10,22,35,70,4,12,18,24,31,44,66,90,90,100,null,89,47,90,null,null,null,9]
// Expected o/p = [90,100,4,89,12,10,47,90,18,24,22,15,9,31,44,35,66,90,70,50,25]
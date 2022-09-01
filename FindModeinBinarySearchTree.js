// Problem Link
// https://leetcode.com/problems/binary-tree-preorder-traversal/submissions/

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


var preorderTraversal = function(root) {
    if(!(root && root.val != null)) return [];
    var stack = [root];
    var result = [];
    while(stack.length > 0){
        var ele = stack.pop();
        result.push(ele.val);
        if(ele.right != null) stack.push(ele.right);
        if(ele.left != null) stack.push(ele.left);
    }
   	return result;
};


// sample i/o = [25,15,50,10,22,35,70,4,12,18,24,31,44,66,90]
// Expected o/p = [90,66,25,10,4,22,35,18,31,15,44,12,70,24,50]
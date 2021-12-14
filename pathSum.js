// Problem Link
// https://leetcode.com/problems/path-sum/

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    var conditionPass = false;

	function dfs(root,sum = 0){
		if(!root) sum == targetSum ? true : false;

		if(conditionPass) return conditionPass;

		if(root.left) dfs(root.left,sum+root.val);

		if(root.right) dfs(root.right,sum+root.val);

		if(!root.left && !root.right) conditionPass = (root.val + sum) == targetSum ? true : false;

		return conditionPass;

	}

	return dfs(root,0);
    
};

// sample i/o = [25,15,50,10,22,35,70,4,12,18,24,31,44,66,90,90,100,null,89,47,90,null,null,null,9],45
// Expected o/p = false
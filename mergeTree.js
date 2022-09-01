// Problem Link
// https://leetcode.com/problems/merge-two-binary-trees/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if(!root1 && !root2) return [];
    if(!root1) return root2;
    if(!root2) return root1;

    var queue = [root2];
    var result = [];
    while(root2.length > 0){
    	var ele = queue.shift();
    	result.push(ele.val);
    	if(ele.left || ele.right){
    		ele.left ? result.push(ele.left) : result.push(null);
    		ele.right ? result.push(ele.right) : result.push(null);	
    	}
    }

    var queue1 = [root1];

    while(queue1.length > 0){
    	var ele = queue.shift();
    	result.push(ele.val);
    	if(ele.left || ele.right){
    		ele.left ? result.push(ele.left) : result.push(null);
    		ele.right ? result.push(ele.right) : result.push(null);	
    	}
    }

    return result;
};

// sample i/o = [25,15,50,10,22,35,70,4,12,18,24,31,44,66,90,90,100,null,89,47,90,null,null,null,9],45
// Expected o/p = false
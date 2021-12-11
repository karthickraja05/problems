// Problem Link
// https://leetcode.com/problems/binary-tree-paths/

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!(root && root.val != null)) return [];

    var leftArr = root.left ? binaryTreePaths(root.left) : [];
    var rightArr = root.right ? binaryTreePaths(root.right) : [];

    var result = [];

    if(leftArr.length == 0 && rightArr.length == 0)
    	return [`${root.val}`];

    leftArr.forEach(item=>{
    	result.push(`${root.val}->${item}`);
    });

    rightArr.forEach(item=>{
    	result.push(`${root.val}->${item}`);
    });

    return result;
};


// sample i/o = [25,15,50,10,22,35,70,4,12,18,24,31,44,66,90,90,100,null,89,47,90,null,null,null,9]
// Expected o/p = ["25->15->10->4->90","25->15->10->4->100","25->15->10->12->89","25->15->22->18->47","25->15->22->18->90","25->15->22->24","25->50->35->31->9","25->50->35->44","25->50->70->66","25->50->70->90"]
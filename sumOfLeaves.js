// Problem Link
// https://leetcode.com/problems/sum-of-left-leaves/

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
var sumOfLeftLeaves = function(root) {
    if(!(root && (root.left || root.right))) return 0;

    var value = 0;

    var queue = [root];

    while(queue.length > 0){
        ele = queue.shift();

        rightEle = ele.right;
        leftEle = ele.left;

        if(rightEle && (rightEle.left || rightEle.right)){
            queue.push(rightEle);
        }
        if(leftEle)
            queue.push(leftEle);   
        

        if(!rightEle && !leftEle)
            value += ele.val;


    }
    return 0;
};


// sample i/o = [25,15,50,10,22,35,70,4,12,18,24,31,44,66,90,90,100,null,89,47,90,null,null,null,9]
// Expected o/p = 203
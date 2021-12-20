// Problem Link
// https://leetcode.com/problems/leaf-similar-trees/

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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    if((root1.right == null && root1.left == null && root2.right == null && root2.left == null)) return root1.val === root2.val ? true : false;
    
    var stack = [root1];
    var result = [];
    while(stack.length > 0){
        var ele = stack.pop();
        if(ele.left == null && ele.right == null){
            result.push(ele.val);
            continue;
        }
        if(ele.right) stack.push(ele.right);
        if(ele.left) stack.push(ele.left);
    }
    
    var stack2 = [root2];
    while(stack2.length > 0){
        var ele = stack2.pop();
        if(ele.left == null && ele.right == null){
            if(result.length == 0){
                return false;
            }
            var first = result.shift();
            if(first === ele.val){
                continue;    
            }else{
                return false;
            }
        }
        if(ele.right) stack2.push(ele.right);
        if(ele.left) stack2.push(ele.left);
    }
    
    return result.length == 0 ? true : false ;
};
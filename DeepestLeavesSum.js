// Problem Link
// https://leetcode.com/problems/deepest-leaves-sum/

var deepestLeavesSum = function(root) {
    let queue = [[root,1]];
    let leaves = [];
    while(queue.length > 0){
        let shiftEle = queue.shift();
        let currentRoot = shiftEle[0];
        if(!currentRoot.left && !currentRoot.right){
            if(leaves[shiftEle[1]] == undefined){
                leaves[shiftEle[1]] = [];
            }
            leaves[shiftEle[1]].push(currentRoot.val); 
        }
        
        if(currentRoot.left){
            queue.push([currentRoot.left,shiftEle[1]+1]);
        } 
        
        if(currentRoot.right){
            queue.push([currentRoot.right,shiftEle[1]+1]);
        }
    }
    
    if(leaves.length > 0){
        let getArr = leaves[leaves.length - 1];
        if(typeof getArr == 'object'){
            return getArr.reduce((a,b) => a + b , 0);    
        }
    }
    return 0;
};

// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19
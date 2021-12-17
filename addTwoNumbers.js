// Problem Link
// https://leetcode.com/problems/add-two-numbers/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var queue = [l1,l2];
    var remaining = 0;
    
    while(queue.length > 0){
        var n = queue.length;
        if(n == 2){
            ele1 = queue.shift();
            ele2 = queue.shift();
            if(ele1.next != null) queue.push(ele1.next);
            if(ele2.next != null) queue.push(ele2.next);    
            var val = ele1.val + ele2.val;
        }else{
            ele2 = queue.shift();
            if(ele2.next != null) queue.push(ele2.next);
            var val = ele2.val;
        }
        
        
        
        if(val > 9){
            var addN = (val - 10) + remaining;
            remaining = 1;    
        }else{
            var addN = val + remaining;
            if(addN > 9){
                addN = (addN - 10);
                remaining = 1;    
            }else{
                
                remaining = 0;
            }
        }
        if(n == 2){
            ele1.val = addN;    
        }else{
            ele1.next = {
                val: addN,
                next: null
            };
            ele1 = ele1.next;
        }
        
    }
    
    if(remaining != 0){
         ele1.next = {
            val: remaining,
            next: null
        };
    }
    
    return l1;
    
};
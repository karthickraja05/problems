// Problem Link
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head == null || head.val == null || head.next == null){
      return head;
    }
    let current = head;
    let previous = '';
    let lastLink = head;
    while(true){
      if(current.val === previous){
        current = current.next;
        lastLink.next = current;
      }else{
        previous = current.val;
        lastLink = current;
        current = current.next;
      }
      if(current === null){
        break;
      }
    }
    return head;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let p1 = new ListNode(1);
let p2 = new ListNode(1);
let p3 = new ListNode(2);
p2.next = p3;
p1.next = p2;

let result = deleteDuplicates(p1);
console.log(result);

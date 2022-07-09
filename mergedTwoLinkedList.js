// Problem Link
// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    let arrVal = [];
    let temp = list1;

    while(temp){
        arrVal.push(temp.val);
        temp = temp.next;
    }
    temp = list2;
    while(temp){
        arrVal.push(temp.val);
        temp = temp.next;
    }
    arrVal.sort((a,b)=> a - b);
    if(arrVal.length == 0){
        return null;
    }
    return createLinkedList(arrVal);
};

function createLinkedList(arr){
    
    let list_name = [];
    while(arr.length > 0){
        let val = arr.shift();
        let temp = new ListNode(val);
        list_name.unshift(temp);
    }
    let temp_obj = '';
    while(list_name.length > 0){
        let list = list_name.shift();
        if(temp_obj == ''){
            temp_obj = list;
        }else{
            list.next = temp_obj;
            temp_obj = list;
        }
    }
    return temp_obj;
}
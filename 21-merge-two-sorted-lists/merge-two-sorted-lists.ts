/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    //lists are already sorted

    const dummy = new ListNode(0); //this head must stay here
    let node = dummy; //this is what we will shift

    while(list1 && list2) {
        if(list1.val < list2.val) {
            node.next = list1;
            list1 = list1.next; //shift list1, why not list1.val?
        } else { //if equals it doesn't matter
            node.next = list2;
            list2 = list2.next //shift list2
        }
        node = node.next //shift node
    }

    if(list1) { //when list1 is longer
        node.next = list1;
    } else {
        node.next = list2;
    }

    return dummy.next
    
};
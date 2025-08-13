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

    //sorted so we can simply do one check and add whichever one is lesser

    let head = new ListNode(0);
    let dummy = head;

    while(list1 || list2) {

        let list1Val = list1 ? list1.val : Infinity;
        let list2Val = list2 ? list2.val : Infinity;

        if (list1Val >= list2Val) {
            dummy.next = new ListNode(list2Val);
            list2 = list2.next; //increment
        } else {
            dummy.next = new ListNode(list1Val);
            list1 = list1.next; //increment
        }

        dummy = dummy.next; //increment
    }

    return head.next;
    
};
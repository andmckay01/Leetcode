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

    /*
    create a new list, iterate through both and add whichever is lesser to the new list
    */

    let dummy = new ListNode(0);
    let head = dummy;

    while(list1 || list2) {

        //these may not be needed but will for now ensure this code runs
        let l1Val = list1 ? list1.val : Infinity;
        let l2Val = list2 ? list2.val : Infinity;

        //add to new list
        if (l1Val <= l2Val) {
            head.next = new ListNode(l1Val);
            list1 = list1.next;
        } else {
            head.next = new ListNode(l2Val);
            list2 = list2.next;
        }

        //increment main list
        head = head.next

    }

    //once done, return dummy
    return dummy.next;
    
};
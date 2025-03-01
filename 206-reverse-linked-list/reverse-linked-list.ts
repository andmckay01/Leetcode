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

function reverseList(head: ListNode | null): ListNode | null {

    let prev = null

    /*
    singly linked list
    prev
    head
    next
    */

    while(head) {
        let nextNode = head.next; //saving next node
        head.next = prev; //reversing
        prev = head
        head = nextNode;
        
    }

    return prev

};
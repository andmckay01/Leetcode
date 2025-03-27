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

    let prev = null;
    
    while(head) {
        let nextNode = head.next; //save nextNode
        head.next = prev; //reverse
        prev = head;
        head = nextNode;
    }

    return prev;
    
};
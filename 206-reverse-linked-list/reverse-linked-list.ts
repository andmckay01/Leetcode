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

    /*
    save next
    reverse
    shift head and prev
    */

    let prev = null;

    while (head) {
        let nextNode = head.next;
        head.next = prev; //reverse
        prev = head;
        head = nextNode;
    }

    return prev;
    
};
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

    let prev = null; //initialize previous

    while(head) {
        let nextNode = head.next; //save next pointer
        head.next = prev; //reverse pointer
        prev = head; //shift prev to head
        head = nextNode; //shift head to nextNode
    }

    return prev; //when everything is done, return prev which will be the final head that we shifted
    
};
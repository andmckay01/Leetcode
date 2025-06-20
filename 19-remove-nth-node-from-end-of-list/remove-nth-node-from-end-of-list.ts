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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    //2 pointer solution where we increment both l and r

    let dummy = new ListNode(0, head); //adding 0 to the beginning of the list
    let left = dummy; //start at 0
    let right = head; //start at 1

    //increment right by n
    while(n > 0) {
        right = right.next;
        n--;
    }

    //shift until right now longer exists
    //this is like doing the inverse. Front of list - n = End of list
    //shift both, will stop when we are good
    while(right) {
        right = right.next;
        left = left.next;
    }

    //after this, left will be at the node before the one we want to remove
    left.next = left.next.next;

    return dummy.next;

}

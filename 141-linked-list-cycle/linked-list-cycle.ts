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

function hasCycle(head: ListNode | null): boolean {

    /*
    toirtise and hare algorithm
    if at any point the hare is before the toirtise we know there is a cycle

    initialize
    loop
      inside the loop we are checking for the fast.next == slow

    slow start at 0 and increment by 1
    fast start at 1 and increment by 2

    stop once slow and fast equals each other
    */

    if (!head || !head.next) return false;

    let slow = head;
    let fast = head;

    while(fast && fast.next) {

        //check if they ever equal (they shouldn't)
        if(fast.next == slow) {
            return true;
        }

        //increment
        slow = slow.next;
        fast = fast.next.next;

    }

    return false;
    
};
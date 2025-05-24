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
    toirtise and hare algorithm with 2 pointers
    increment slow by 1 and fast by 2
    if head.next of the hare ever equals the toirtise, there is a cycle
    */

    let slow = head;
    let fast = head;

    //while loop will break when these equal
    while(fast && fast.next) {

        if (fast.next == slow) return true;

        slow = slow.next;
        fast = fast.next.next;

    }

    return false; //if nothing flags while we increment
    
};
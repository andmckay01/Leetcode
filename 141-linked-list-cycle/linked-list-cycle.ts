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
    we can use a hashmap where we have ListNodes as the values and check that for
    already existin list nodes. 

    or we can use the tortoise and the hare algorithm to figure it out

    iterate through
    check if the slow ListNode ever equals the fast ListNode
    */

    let slow = head;
    let fast = head;

    //increment until slow is at the end
    //fast should never be behind slow

    while(fast && fast.next) {

        if(fast.next == slow) return true

        slow = slow.next;
        fast = fast.next.next;

    }

    return false
    
};
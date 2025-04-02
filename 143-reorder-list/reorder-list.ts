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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {

    /*
    we're basically reordering the list with 2 pointers instead of 1

    if we get a time complexity of O(n) we will be happy.

    steps:
    1. use a slow and fast pointer to see where our midpoint is
    2. break the lists
    3. reverse the 2nd list
    4. merge the 2 lists
    */

    let slow = head;
    let fast = head.next;

    //figure out where we will separate the lists
    while(fast && fast.next) { //increment until fast cannot be incremented
        slow = slow.next; //increment 1
        fast = fast.next.next; //increment 2
    }

    //save our list nodes and separate our lists
    let first = head;
    let second = slow.next; //start of new 2nd list
    slow.next = null; //separate the lists by breaking the link

    //reverse the list
    let prev = null;
    let node = second;
    while(node) {
        let nextNode = node.next; //save in temp
        node.next = prev; //reverse
        prev = node; //increment prev
        node = nextNode; //increment second head
    }
    second = prev;

    //loop through 2nd list and splice into the 1st
    while(second) {
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second; //insert second into head
        second.next = temp1; //add pointer to the value

        first = temp1; //increment
        second = temp2; //increment

    }
    
};
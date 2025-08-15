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

    //find midpoint
    let slow = head;
    let fast = head.next;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let first = head;
    let second = slow.next; //end of the first list is where our slow pointer is, slow.next is start of 2nd
    slow.next = null; //break the link

    //reverse the 2nd list
    let prev = null;
    let node = second;
    while(node) {
        let nextNode = node.next;
        node.next = prev;
        prev = node;
        node = nextNode;
    }
    second = prev;

    while(second) {

        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1;

        //increment
        first = temp1;
        second = temp2;

    }

};

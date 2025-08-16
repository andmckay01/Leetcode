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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let head = new ListNode(0);
    let dummy = head;
    let carry = 0;

    while (l1 || l2 || carry > 0) {
        const l1Value = l1 ? l1.val : 0;
        const l2Value = l2 ? l2.val : 0;
        let newValue = l1Value + l2Value + carry;
        carry = 0; //reset carry

        if (newValue >= 10) {
            newValue = newValue % 10;
            carry = 1; //set carry
        }

        head.next = new ListNode(newValue);
        head = head.next; //increment

        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }
    }

    return dummy.next;
    
};
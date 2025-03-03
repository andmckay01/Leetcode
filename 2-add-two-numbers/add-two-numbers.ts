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

    let head = new ListNode(0) //no next node yet
    let node = head;
    let carry = 0

    while (l1 || l2 || carry > 0) {

        //initialize values
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;

        //calculate sum, carry, and add to current head
        let sum = l1Value + l2Value + carry;
        carry = 0;
        let newValue = sum;

        if (sum > 9) {
            newValue = sum % 10
            carry = 1
        }

        //add new node
        node.next = new ListNode(newValue);
        node = node.next;

        //move input list nodes to their next nodes
        if (l1) {
            l1 = l1.next
        }

        if (l2) {
            l2 = l2.next
        }

    }

    return head.next


};
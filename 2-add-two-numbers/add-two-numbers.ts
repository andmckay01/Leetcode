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

    while(l1 || l2 || carry > 0) {

        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;
        let newNumber = l1Value + l2Value + carry;
        carry = 0;

        if (newNumber > 9) {
            newNumber = newNumber % 10;
            carry = 1
        }

        dummy.next = new ListNode(newNumber);
        dummy = dummy.next;

        if (l2) {
            l2 = l2.next;
        }

        if (l1) {
            l1 = l1.next;
        }
        
    }

    return head.next;
    
};
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
    let node = head;
    let carry = 0;

    while (l1 || l2 ) { //this allows us to traverse both

        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;

        let sum = l1Value + l2Value + carry;
        carry = 0 //reset carry
        let newValue = sum;

        if (sum > 9) {
            newValue = sum - 10;
            carry = 1;
        }

        node.next = new ListNode(newValue);
        node = node.next

        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }

        if (carry) {
            node.next = new ListNode(carry);
        }

    }


    return head.next
    
};
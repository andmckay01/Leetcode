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

    let carry = 0;
    let dummy = new ListNode(0);
    let head = dummy; //we will shift this one as we iterate

    while(l1 || l2 || carry > 0) {
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;
        let sum = l1Value + l2Value + carry;
        carry = 0; //reset carry after we use it for sum

        if (sum >= 10) {
            sum = sum % 10; //remove 10 from the sum
            carry = 1; //set carry
        }

        //add and increment result list
        head.next = new ListNode(sum);
        head = head.next;

        //increment input lists
        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }
    }

    return dummy.next; //skip the 0
    
};
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

    /*
    add numbers
    calculate carry
    use a dummy node
    increment
    while loop break
    */

    let carry = 0;
    let dummy = new ListNode(0);
    let node = dummy;

    while (l1 || l2 || carry > 0) {

        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;
        let newValue = l1Value + l2Value + carry;
        carry = 0;

        if (newValue > 9) {
            newValue = newValue % 10;
            carry = 1;
        }

        console.log(dummy);

        node.next = new ListNode(newValue);
        node = node.next;

        //increment
        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }

    }

    return dummy.next;
    
};
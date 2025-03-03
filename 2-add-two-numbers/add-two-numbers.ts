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

    // Continue while we have digits in either list OR a carry value
    while (l1 || l2 || carry > 0) {
        // Get values (defaulting to 0 if node is null)
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;

        // Calculate sum including any existing carry
        let sum = l1Value + l2Value + carry;
        
        // Calculate new digit and carry
        let newValue = sum % 10;  // Get the ones digit
        carry = Math.floor(sum / 10);  // Get the tens digit
        
        // Create the new node with the calculated value
        node.next = new ListNode(newValue);
        node = node.next;

        // Move to next nodes in input lists if they exist
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return head.next;
}
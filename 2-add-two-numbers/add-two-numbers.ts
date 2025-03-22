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

    let head = new ListNode(0); //we will return head.next
    let current = head; //used for iterating
    let carry = 0

    while(l1 || l2 || carry > 0) {

        //these give us zeros needed for adding different lengths
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;
        let newValue = l1Value + l2Value + carry;
        carry = 0 //reset carry once used

        if(newValue > 9) {
            carry = 1; //carry is always 1
            newValue = newValue % 10; //reset new value because we carried some over
        }

        //add value as a new ListNode, this should have a next pointer that is null
        current.next = new ListNode(newValue); 
        current = current.next; //shift list node

        //shift l1 and l2 values
        if (l1) {
            l1 = l1.next
        }

        if (l2) {
            l2 = l2.next
        }
    }

    return head.next //head is 0, head.next is our first digit
    
};
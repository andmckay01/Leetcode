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

    let head = new ListNode(0); //dummy head
    let node = head; //we'll use this node to perform operations
    let carry = 0;

    while(l1 || l2 || carry > 0) {
        
        //this will ensure we have 0s to add if the numbers are different lengths
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;
        let newValue = l1Value + l2Value + carry; //carry comes from last time
        carry = 0; //reset carry

        if(newValue > 9) {
            newValue = newValue % 10;
            carry = 1; //add carry
        }

        node.next = new ListNode(newValue); //write new value, this will give us 0 -> num
        node = node.next; //move node

        //increment the 2 numbers
        if(l1) {
            l1 = l1.next
        }

        if(l2) {
            l2 = l2.next
        }
    }
    return head.next //dummy head is 0, head.next will be the start of our new list

};
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

    let head = new ListNode(null); // dummy head
    let current = head; //current is currently at the head
    let carry = 0 // define carry for later

    // this ensures we will perform that add operation if any numbers needs adding
    while(l1 || l2 || carry > 0) {

        // we want 0 for these if they do not exist so we can add values that are different digits
        let l1Value = l1 ? l1.val : 0; 
        let l2Value = l2 ? l2.val : 0;

        let value = l1Value + l2Value + carry //carry starts at 0
        carry = 0; //reset carry after we use it

        //perform operations if sum > 9
        if(value > 9) {
            carry = 1; //we know the carry will only ever be 1
            value = value % 10;
        }

        current.next = new ListNode(value); //this gives us [0, 7] on the first run
        current = current.next //shift node

        //move our pointers
        if(l1) {
            l1 = l1.next
        }

        if(l2) {
            l2 = l2.next
        }
    }

    return head.next //shifts our head from [0,7,0,8] to [7,0,8]

};
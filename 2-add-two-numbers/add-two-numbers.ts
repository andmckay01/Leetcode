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

    let newList = new ListNode(0);
    let node = newList;
    let carry = 0;

    while(l1 || l2 || carry > 0) {

        //get values to add together
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;

        //add them together
        let newValue = l1Value + l2Value + carry;
        carry = 0; //reset carry right after we use it

        //compute the newvalue and carry as needed
        if(newValue > 9) {
            newValue = newValue % 10;
            carry = 1;
        }
        //add to the next node in the newList and increment
        node.next = new ListNode(newValue);
        node = node.next;

        //increment values
        if(l1) {
            l1 = l1.next;
        }

        if(l2) {
            l2 = l2.next
        }

    }

    return newList.next;
    
};
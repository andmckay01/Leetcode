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

    //use the dummy head pattern so that we don't lose our spot
    let dummyHead = new ListNode(0);
    let node = dummyHead;
    let carry = 0;

    while(l1 || l2 || carry > 0) {

        //need these so that we have zeros if they do not exist
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;

        let newValue = l1Value + l2Value + carry;
        carry = 0; //reset carry

        if(newValue > 9) {
            carry = 1;
            newValue = newValue % 10; //will remove 10 from newValue
        }

        node.next = new ListNode(newValue); //add next node with newValue
        node = node.next //move head

        if(l1) {
            l1 = l1.next
        }

        if(l2) {
            l2 = l2.next
        }

    }

    return dummyHead.next; //dummyHead is 0, next is the start of our list
    
};
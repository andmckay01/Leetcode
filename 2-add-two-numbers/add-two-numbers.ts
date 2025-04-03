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
    we need a carry
    we need to get the remainder 
    we need to set the values so that we have zeros
    we need to add them together starting at the current list node and then increment htem
    we need to add this to a new
    */

    let carry = 0;
    let dummy = new ListNode(null);
    let node = dummy;

    while(l1 || l2 || carry > 0) {

        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;
        let newValue = l1Value + l2Value + carry
        carry = 0; //remember to reset carry once we use it in newValue

        if(newValue > 9) {
            newValue = newValue % 10;
            carry = 1;
        }

        node.next = new ListNode(newValue);
        node = node.next; //increment

        //increment our initial linked lists
        if(l1) {
            l1 = l1.next
        }

        if(l2) {
            l2 = l2.next
        }


    }

    return dummy.next;
    
};
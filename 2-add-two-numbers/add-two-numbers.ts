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
    need to add to the new one
    */

    let carry = 0;
    let dummy = new ListNode(0);
    let head = dummy; //this is what we will return (with next)

    while(carry > 0 || l1 || l2) {
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;

        let newValue = carry + l1Value + l2Value;
        carry = 0; //reset carry after using it

        if (newValue > 9) {
            newValue = newValue % 10;
            carry = 1;
        }

        //set new value to our dummy and move to that pointer
        head.next = new ListNode(newValue);
        head = head.next;

        //increment pointers
        if (l1) {
            l1 = l1.next;
        };

        if (l2) {
            l2 = l2.next;
        }

    }

    return dummy.next;
    
};
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
    don't need to reverse
    define the numbers or 0 so that they can be added up
    define carry (dynamic variable)
    */

    let carry = 0;
    let newList = new ListNode(0); //starting at 0, will return .next
    let node = newList;

    while (l1 || l2 || carry > 0) {

        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;

        let newValue = l1Value + l2Value + carry; //set newValue
        carry = 0; //reset carry

        if (newValue > 9) {
            newValue = newValue % 10; //set newValue
            carry = 1 //set carry
            console.log('new value: ', newValue);
        }

        //use new value for new node
        node.next = new ListNode(newValue);
        node = node.next; //increment

        //increment linked lists
        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }
    }

    return newList.next;
};
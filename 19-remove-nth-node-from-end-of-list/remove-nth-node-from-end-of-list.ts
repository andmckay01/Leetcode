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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    /*
    iterate through to the end (we don't know the length of the list)
    save n and listnode value to a map
    at the end we pull the values of n and n+1
    remove n
    then point n-1 to n+1

    one-pass is a two-pointer solution where we initially shift our right pointer by n
    then when there is no node.next for the right pointer, our left pointer is what we need
    but we need to save the previous pointer so that we can point that to our l+1

    */

    let dummy = new ListNode(0, head); //must start 1 to the left so that our L is in the correct place
    let left = dummy; //starts at dummy (1 to the left)
    let right = head; //starts at head

    //increment our right to the starting point
    while(n > 0) {
        right = right.next; //increment
        n--; //decrement n
    }

    console.log(n);
    console.log(right);

    //shift left and right until right doesn't exist
    while(right) {
        left = left.next;
        right = right.next;

    }

    //save our variables, left is going to be at 
    //current node is where we need to be
    //
    left.next = left.next.next; //skip over

    return dummy.next;




    
};
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    /*
    already sorted
    loop through one of them
    check the current value against the other list's node, whichever one is less, add it
    at the very end there will be one final node we'll just need to add
        we could simplify code and simply write in that if null default to other
    */

    let newList = new ListNode(null); //initialize at null
    let node = newList;

    while(list1 && list2) {
        let list1Value = list1 ? list1.val : null;
        let list2Value = list2 ? list2.val : null;

        if(list1Value < list2Value) {
            // newList.next = new ListNode(list1.val) //not sure this verbosity is needed
            node.next = list1 //add new
            list1 = list1.next; //increment list1
        } else {
            node.next = list2 //add new
            list2 = list2.next; //increment list1
        }

        //increment current node
        node = node.next;
    }

    //at the very end we add the final value for whichever is not null
    if(list1) {
        node.next = list1
    } else {
        node.next = list2
    }

    return newList.next; //this starts at null but we want to start at the first value
    
};
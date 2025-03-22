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

    let dummy = new ListNode(0);
    let current = dummy;

    while(list1 && list2) { //while both
        if(list1.val < list2.val) {
            current.next = list1; //add to list
            list1 = list1.next; //increment
        } else {
            current.next = list2; //add to list
            list2 = list2.next; //increment
        }
        current = current.next //increment resulting list
    }

    //we can avoid the loop by undestanding that the above while loop will iterate through each list until
    //there is only a single value in one of the lists left, therefore we do not need the while loop
    // while(list1 || list2) {
    //     if(list1) {
    //         current.next = list1; //add to list
    //         list1 = list1.next
    //         current = current.next //increment resulting list
    //     }
    //     if(list2) {
    //         current.next = list2; //add to list
    //         list2 = list2.next
    //         current = current.next //increment resulting list
    //     }
    // }

    //therefore it looks liek this:
    if(list1) {
        current.next = list1
    } else {
        current.next = list2 //and there's no need to increment either
    }

    return dummy.next
    
};
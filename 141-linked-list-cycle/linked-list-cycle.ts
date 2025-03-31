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

 /*
 what is a cycle? -> a node where pointers eventually follow itself, use O(1) constant memory.

 output true if if there is a cycle and false if not

 use a hashmap, look if the current head.next = a node we already saw
 O(n) time complexity, O(n) space complexity

 */


//this is good with O(n) time and O(n) space. But we can do one with O(1) space
// function hasCycle(head: ListNode | null): boolean {

//     let hashmap = new Set<ListNode>(); //adding this static type sped up the algorithm

//     while(head) {
//         //cycle found if next node is a previously seen node
//         if(hashmap.has(head.next)) return true

//         //set the current head in our hashmap as we iterate
//         hashmap.add(head);

//         //increment head for next iteration
//         head = head.next 
//     }

//     return false
    
// };

//this version used the toirtise and the hare algorithm
//if they are ever equal, we have a cycle
function hasCycle(head: ListNode | null): boolean {

    let fast = head;
    let slow = head;

    while(fast && fast.next) { //fast.next is not null

        fast = fast.next.next; //increment fast by 2
        slow = slow.next //increment slow by 1

        if(fast == slow) { //if these ever equal after the starting point, we have a cycle
            return true
        }

    }

    return false

}

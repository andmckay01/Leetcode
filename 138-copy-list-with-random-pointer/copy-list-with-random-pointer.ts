/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {

    /*
    This would be extremely easy if it was a normally linked list
    But since there is a random, we need have the information of all the nodes in the linkned list before we add the pointers.

    steps:
    1. iterate through once, adding to a hashmap of old to copy
    2. iterate through again adding our pointers
    3. return the head of the copy list

    *remember that one of the pointers will point to null
    */

    let oldToCopy = new Map().set(null, null); //this handles our random that points to null

    let cur = head;
    while(cur) {
        const copy = new Node(cur.val); //create copy node with current
        oldToCopy.set(cur, copy); //add to hashmap
        cur = cur.next; //increment
    }

    cur = head;
    while(cur) {
        //copy's are all in our hashmap, now we need to add the pointers
        const copy = oldToCopy.get(cur); //get the copy
        
        //add the pointers
        copy.next = oldToCopy.get(cur.next);
        copy.random = oldToCopy.get(cur.random); //what about for null?
        cur = cur.next;
        
    }

    // console.log(oldToCopy);

    return oldToCopy.get(head); //this will return the new head
    
};
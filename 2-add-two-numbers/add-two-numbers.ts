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

    const add = (node1, node2, carry = 0) => {
        if (!node1 && !node2 && carry === 0) return null;
        
        const sum = (node1?.val ?? 0) + (node2?.val ?? 0) + carry;
        
        return new ListNode(
            sum % 10,
            add(node1?.next, node2?.next, Math.floor(sum / 10))
        );
    };
    
    return add(l1, l2);
    
};


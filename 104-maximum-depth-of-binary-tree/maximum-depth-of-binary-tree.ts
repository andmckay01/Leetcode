/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {

    /*
    use a function 
    */

    if(!root) return 0; //if the root does not exist

    //the 1 + gives us the length between current node and our parent
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    
};
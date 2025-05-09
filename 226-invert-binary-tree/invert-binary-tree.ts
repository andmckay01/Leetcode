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

function invertTree(root: TreeNode | null): TreeNode | null {

    //base case
    if (!root) return null;

    //invert logic
    let tempLeft = root.left;
    root.left = root.right;
    root.right = tempLeft;

    //recurse to invert all children
    invertTree(root.left);
    invertTree(root.right);

    return root;
    
};
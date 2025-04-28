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

    /*
    a binary tree has 2 children, left and right

    we can use recursion to invert everything
    */

    if (!root) return null;

    //invert
    let tmpRight = root.right;
    root.right = root.left;
    root.left = tmpRight;

    //recursively call on both children
    invertTree(root.left);
    invertTree(root.right);

    return root;
    
};

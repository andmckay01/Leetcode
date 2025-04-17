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
    use recursion where we call the function that inverts for every single node
    */

    if (!root) return null;

    //invert
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    //recurse
    invertTree(root.left);
    invertTree(root.right);

    return root;
    
};
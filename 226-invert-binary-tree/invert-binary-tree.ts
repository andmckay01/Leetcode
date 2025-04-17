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
    use recursion on a function that:
    1. looks at a node
    2. swaps children
    3. recursively call our function
    */

    if (!root) return null;

    //swap trees
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    //resursively call the invertTree function
    invertTree(root.left);
    invertTree(root.right);

    return root
    
};
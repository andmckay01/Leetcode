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
    switch the children of every node
    use a recrusive call
    */

    if (!root) return null

    //switch
    let rightTemp = root.right;
    root.right = root.left;
    root.left = rightTemp;

    //resursive call
    invertTree(root.left);
    invertTree(root.right);

    return root;
    
};
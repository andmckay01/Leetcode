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

function isBalanced(root: TreeNode | null): boolean {

    /*
    balanced binary tree is one where every node's children differ in height by no more than 1
    so we can use a recursive dfs to find the heights
    compare those heights
    if at any point they are not balanced, we will return false
    */

    function dfs(node) {

        if(!node) return [true, 0]

        //recursive call
        const left = dfs(node.left);
        const right = dfs(node.right);

        //find height and return
        const height =  1 + Math.max(left[1], right[1]);

        // If either subtree is unbalanced, the whole tree is unbalanced
        if (!left[0] || !right[0]) {
            return [false, 0]; // Height doesn't matter if already unbalanced
        }

        if(Math.abs(right[1] - left[1]) > 1) {
            console.log([false, height])
            return [false, height]
        } else {
            console.log([true, height])
            return [true, height]
        }

    }

    let result = dfs(root);
    return result[0]
    
};
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

function diameterOfBinaryTree(root: TreeNode | null): number {

    /*
    diameter is the longest path between 2 nodes
    use dynamic variable and then run a recursive dfs on each side
    */

    let res = 0;

    function dfs(node) {

        if (!node) return 0;

        //resursive calls
        let left = dfs(node.left);
        let right = dfs(node.right);

        //need to save max diameter each call in this function
        res = Math.max(res, left + right);

        //recursive dfs requires a return
        return 1 + Math.max(left, right);
        
    }

    //initial call and final return
    dfs(root);
    return res;
    
};
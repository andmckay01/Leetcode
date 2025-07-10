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
    use a recursive depth first search
    we check if we are balanced at every level and count the depth at every level and retun in an array
    if at any point we are unbalanced, return false
    at the very end, we call the dfs and return the true/false flag which will be our top level balance
    */

    function dfs(root) {

        if (!root) return [true, 0];

        //recursive calls and define variables
        const left = dfs(root.left);
        const right = dfs(root.right);

        //calculate the current height
        const height = 1 + Math.max(left[1], right[1]);

        //determine if it is balanced
        const balanced = (Math.abs(left[1] - right[1]) <= 1 && //height is within 1
        left[0] && right[0]); //both sides are true

        //use balanced to determine what to return
        if (balanced) {
            return [true, height]
        } else {
            return [false, height]
        }
    
    }

    let result = dfs(root);
    return result[0];
    
};
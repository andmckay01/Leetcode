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

    let res = 0;

    /*
    computing the diameter is done with recursion
    - need a member / global variable where we track the max length of nodes
      - this is computed using 1 + the max lengh of our children
    - height of each tree at each node needs to be returned up to the node
    */

    function dfs(curr) {

        if(!curr) return 0;

        //recurse through our dfs algorithm
        let left = dfs(curr.left);
        let right = dfs(curr.right);

        //set res and return height
        res = Math.max(res, left + right);
        return 1 + Math.max(left, right);
    }

    dfs(root); //call dfs at the root
    return res;
    
};
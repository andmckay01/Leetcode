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
    we need to save a res variable that we iteratively track the max diameter
    use a recursive call to our dfs function where we calculate res and then return max height of each node
    at the end, we recurse all the way back up, saving to our res the whole way, effectively finding the max
    */

    function dfs(curr) { //curr will be current node
        if(!curr) return 0;

        //call our functions
        let left = dfs(curr.left);
        let right = dfs(curr.right);

        //save to res and figure out what to return
        res = Math.max(res, left + right); //res is current res or the max of the current leg + 1
        return 1 + Math.max(left, right);

    };

    dfs(root);
    return res;
    
};
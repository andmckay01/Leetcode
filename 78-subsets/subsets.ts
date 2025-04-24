function subsets(nums: number[]): number[][] {

    /*
    Visualize a tree that is created with every possible combination
    We start by deciding to add 1 or []
    Then each node of that we add 2 or []
    etc.
    
    For our loop, if we ever get to a point where the pointer is equal to our nums length, we simply return (out of bounds)

    using recursion will allow subset to to be returned

    no matter what, this is O(n^2), so why not just keep it easy and do a nested loop?\
    */

    let res = [];
    let subset = [];

    function dfs(i: number): void {

        if(i >= nums.length) {
            res.push([...subset]) //this is a leaf, append
            return
        }

        //for the left tree
        subset.push(nums[i]);
        dfs(i + 1);

        //for the right tree
        subset.pop();
        dfs(i + 1); //called with one less value in the subset
    }

    dfs(0);
    return res;
    
};
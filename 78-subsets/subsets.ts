function subsets(nums: number[]): number[][] {

    /*
    need to use recursive dfs for each number to build the subset
    only add to the map if it does not exist
    each time we recurse down, we add to a subset array (deciding to include or not include the next number)
    backtracking

    build the subset as we decide to add or not
    we then run dfs 
    */

    let res = [];
    let subset = [];

    //i is defaulted to zero
    function dfs(i = 0) {

        //if we are at the end, add the subset to our result
        if (i >= nums.length) {
            res.push([...subset]);
            return
        }

        //resursive call on the other indexes
        subset.push(nums[i]);
        dfs(i + 1);

        //other recursive call without the inclusion of the number
        subset.pop();
        dfs(i + 1);

    }

    //run dfs and return
    dfs();
    return res;

};
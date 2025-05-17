function subsets(nums: number[]): number[][] {

    /*
    recursively call dfs, add subset we build to res if we're at the end of the depth
    */

    let res = [];
    let subset = [];

    function dfs(i = 0) {
        if (i >= nums.length) {
            res.push([...subset]) //spread
            return
        }

        subset.push(nums[i]);
        dfs(i + 1);

        subset.pop();
        dfs(i + 1);

    }

    //call and return
    dfs();
    return res;
    
};
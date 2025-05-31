function subsets(nums: number[]): number[][] {

    let res = [];
    let subset = [];

    function dfs(i = 0) {
        if (i >= nums.length) {
            res.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        dfs(i + 1);

        subset.pop();
        dfs(i + 1);

    }

    //call dfs and return
    dfs();
    return res;
    
};
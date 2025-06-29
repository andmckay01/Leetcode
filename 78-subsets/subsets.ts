function subsets(nums: number[]): number[][] {

    let subset = [];
    let res = [];

    function dfs( i = 0 ) {
        if (i >= nums.length) {
            res.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        dfs(i + 1)

        subset.pop();
        dfs(i + 1);
    }

    dfs();
    return res;
    
};
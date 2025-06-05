function subsets(nums: number[]): number[][] {

    let res = [];
    let subsets = [];

    function dfs(i = 0) {
        if (i >= nums.length) {
            res.push([...subsets]);
            return;
        }

        subsets.push(nums[i])
        dfs(i + 1);

        subsets.pop();
        dfs(i + 1);
    }

    dfs();
    return res;
    
};
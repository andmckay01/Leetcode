function subsets(nums: number[]): number[][] {

    let res = [];
    let subset = [];

    function dfs(i = 0) {

        console.log('res: ', res);
        console.log('subset: ', subset);

        if (i >= nums.length) {
            res.push([...subset]);
            return
        }

        subset.push(nums[i]);
        dfs(i + 1);

        subset.pop();
        dfs(i + 1);

    }

    //call dfs and return res
    dfs();
    return res;
    

};
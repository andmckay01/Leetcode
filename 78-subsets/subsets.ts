function subsets(nums: number[]): number[][] {

    let res = [];
    let subset = [];

    /*
    add to subset as we recursively call dfs
    add to res if we are at the end
    */

    function dfs(i = 0) {

        //if we are at the final number we add subset to res
        if (i >= nums.length) {
            res.push([...subset])
            return
        }

        //otherwise, we call with current num added and without current num added
        subset.push(nums[i]);
        dfs(i + 1);

        subset.pop();
        dfs(i + 1);

    }

    //call dfs and return res
    dfs();
    return res;
    
};
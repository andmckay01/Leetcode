function subsets(nums: number[]): number[][] {

    /*
    use dfs recursive call
    we construct a tree where we recursively call the dfs
      once with the new value added to the subset
      once with the new value removed (never added) so that we can move down the tree
    */

    let res = [];
    let subset = [];

    function dfs(i = 0) {

        //if we are at the end, append the subset to our result
        if (i >= nums.length) {
            res.push([...subset]);
            console.log('res: ', res);
            return
        }

        console.log('subset: ', subset);

        //add to our tree
        subset.push(nums[i]);
        dfs(i + 1);

        //remove from our tree and recursively call
        subset.pop();
        dfs(i + 1);
    }

    dfs();
    return res;

};
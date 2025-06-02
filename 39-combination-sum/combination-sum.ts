function combinationSum(candidates: number[], target: number): number[][] {

    /*
    dfs implementation with a check for summing to target in order to be added to subset
    */

    candidates.sort((a, b) => a - b);
    let result = [];

    function dfs(i, cur, total) {

        //if it equals total, add it
        if (total == target) {
            result.push([...cur]);
            return;
        }

        //create a loop where we fire off all recursive calls
        for (let j = i; j < candidates.length; j++) {
            
            //return if the total is too large
            if (total + candidates[i] > target) {
                return;
            }
            cur.push(candidates[j]);
            dfs(j, cur, total + candidates[j]);
            cur.pop(); //

        }
    
    };

    dfs(0, [], 0);
    return result;
    
};
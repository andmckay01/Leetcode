function threeSum(nums: number[]): number[][] {

    /*
    our numbers array must first be sorted
    a, b, c
    create a loop to find our a, then we use binary search to find our b and c that satisfies the condition
    save anything that satisfies to our output array as itself an array
    1 main loop driven by nums (leftmost number)
      we need to have a condition where if the current index = previous index, continue to increment
    2nd loop is two sum
    */

    nums.sort((a, b) => a - b);
    let res = [];

    for(let i=0; i<nums.length; i++) {

        if(nums[i] == nums[i-1]) { //i>0 is crucial so that we don't ever continue on the first one
            continue //we don't want to use the same digit for a more than once
        }

        let a = i //current pointer
        let b = i+1; //one past
        let c = nums.length - 1; //endpoint

        while(b < c) {

            while(b < c && a == b) {
                b++;
            }

            let sum = nums[a] + nums[b] + nums[c];

            //increment at the end based on condition
            if(sum > 0) {
                c--;
            } else if (sum < 0) {
                b++;
            } else {
                res.push([nums[a], nums[b], nums[c]])
                b++;
                c--;
                while(nums[b] == nums[b-1] && b < c) {
                    b++;
                }
            }
        }
    }

    return res;
    
};
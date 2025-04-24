function maxSubArray(nums: number[]): number {

    /*
    we want the longest continuous stretch of numbers that give us the highest value
    we can start at the left and if at any point the maxSum is < 0 we can reset it -> these only hurt us
    eventually we get to a point where we have a max
        our current subaray value is checked against this max
    */

    let curSum = 0;
    let maxSum = nums[0]; //this ensures if all are negative we still return a value

    for (const n of nums) {

        if(curSum < 0) {
            curSum = 0;
        }

        curSum += n //update current sum with current integer

        //every time, we set our max if possible
        maxSum = Math.max(maxSum, curSum);

    }

    //at the end we simply return the max
    return maxSum
    
};
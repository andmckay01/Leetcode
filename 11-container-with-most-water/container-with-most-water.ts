function maxArea(height: number[]): number {

    /*
    dynamic programming where we store the volume
    two pointers starting on opposing ends
    increment the lowest of the two height[i]
    do this while l < r, break when = then return the container volume and the 2 indexes
    */

    /*
    if this required returning the indices, what would I do?
    I would need to have a data structure that saved these indices
    If only one unique answer:
      -> variable for tracking the max volume
      -> use this variable as a key for a map that contains the 2 index numbers

    at the end we simply look up the profit and return the index numberse

    */

    let l = 0;
    let r = height.length - 1;
    let maxAmount = -Infinity;

    while(l < r) {

        //calculate max
        maxAmount = Math.max(maxAmount, Math.min(height[r], height[l]) * (r - l));

        //increment
        if(height[l] < height[r]) {
            l++;
            console.log(l);
        } else {
            r--;
        }

    }

    return maxAmount;

};
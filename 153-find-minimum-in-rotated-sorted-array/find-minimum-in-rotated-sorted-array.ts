function findMin(nums: number[]): number {

    /*
    sorted so we can still use binary search
    dynamic programming to find the min??
    we need to find the pivot point. The digit to the right of the pivot point is the min
    We can find the pivot point by checking if i + 1 is less than i. If it is, simply return nums[i + 1]
    */

    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let m = l + Math.floor((r - l) / 2); //midpoint, upper

        //this means all values between m + 1 and r aren't needed
        if (nums[r] > nums[m]) {
            r = m;
        } else {
            l = m + 1
        }

    }

    return nums[l];
    
};
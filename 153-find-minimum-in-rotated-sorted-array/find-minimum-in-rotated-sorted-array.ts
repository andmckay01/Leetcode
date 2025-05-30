function findMin(nums: number[]): number {

    /*
    sorted means we can use binary search but we need to find where the pivot point is
    */

    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);

        // console.log('m: ', m);
        // console.log('nums of m: ', nums[m])
        // console.log('nums of r: ', nums[r])

        //if the number of m is less than number of r
        if (nums[m] < nums[r]) {
            r = m;
        } else {
            l = m + 1;
        }

    }

    return nums[l];
    
};
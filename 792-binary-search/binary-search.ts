function search(nums: number[], target: number): number {

    let l = 0;
    let r = nums.length - 1;

    //lower bound
    while(l <= r) {
        let m = l + Math.floor(( r - l ) / 2);

        //if less than target, increase l
        if (nums[m] == target) {
            return m;
        } else if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return -1
    
};
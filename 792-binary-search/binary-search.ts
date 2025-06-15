function search(nums: number[], target: number): number {

    let l = 0;
    let r = nums.length - 1;

    //once they equal, we should have the number we're searching for
    while(l <= r) {
        let m = Math.floor(l + (r - l)/2); //left bound

        console.log('r: ', r);
        console.log('l: ', l);
        console.log('m: ', m);

        //if midpoint is greater than target
        if (nums[m] == target) {
            return m;
        //if midpoint is greater than target we shift r down to midpoint
        } else if (nums[m] > target) {
            r = m - 1; //left bound
        //else we shift l up to midpoint + 1
        } else {
            l = m + 1;
        }

    }

    return -1;
    
};
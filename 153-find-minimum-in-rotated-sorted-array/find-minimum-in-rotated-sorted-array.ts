function findMin(nums: number[]): number {

    /*
    binary search
    left and right
    We want L < R to simply work, which means we want L = R to break out loop
    */

    let l = 0;
    let r = nums.length - 1;
    let m = nums[l];

    while(l < r) {

        m = l + Math.floor((r - l) / 2);

        m = Math.floor((r + l) / 2);

        console.log('l: ', l, 'nums[l]: ', nums[l]);
        console.log('r: ', r, 'nums[r]: ', nums[r]);
        console.log('m: ', m, 'nums[m]: ', nums[m]);
        console.log('----------');

        if(nums[r] > nums[m]) {
            r = m;
        } else {
            l = m + 1;
        }
    }

    return nums[l];

}


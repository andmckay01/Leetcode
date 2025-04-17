function findMin(nums: number[]): number {

    let l = 0;
    let r = nums.length - 1;

    while(l < r) {
        let m = l + Math.floor((r-l) / 2); //midpoint without bit overflow

        if(nums[r] > nums[m]) {
            r = m;
        } else {
            l = m + 1;
        }
    }

    return nums[l]

};
function search(nums: number[], target: number): number {

    /*
    ascending order tells us we can use binary search
    O(log n) is also binary search time complexity
    */

    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        if (target < nums[m]) {
            r = m - 1;
        } else if (target > nums[m]) {
            l = m + 1;
        } else {
            return m
        }
    }

    return -1
    
};

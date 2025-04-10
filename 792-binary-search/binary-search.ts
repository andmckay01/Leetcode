function search(nums: number[], target: number): number {

    /*
    ascending tells us we can use binary search
    use a pointer to decide where to search
    check if number is more or less than what we access

    O(n log n)

    */

    let l = 0;
    let r = nums.length - 1;


    while(l <= r) {

        let x = Math.floor((r + l) / 2);

        if(nums[x] < target) {
            l = x + 1;
        } else if (nums[x] > target) {
            r = x - 1;
        } else {
            return x
        }

    }

    return -1
    
};
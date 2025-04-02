function search(nums: number[], target: number): number {
        
    let l = 0;
    let r = nums.length-1;

    while(l <= r) {
        let m = Math.floor((r+l)/2);

        if(target < nums[m]) {
            r = m-1;
        } else if (target > nums[m]) {
            l = m+1
        } else { 
            return m;
        }

    }

    return -1

};

/*
When it's sorted we can look at the midpoint and see if it's smaller or larger than the target
Then we recurse and do the same thing again 
Once the thing we're searching for hits the midpoint, we have found our value

While loop can will evaluate to log(base 2)n because every loop eliminates half of the values


*/
function containsDuplicate(nums: number[]): boolean {

    const seen = new Set<number>();

    for(let i=0; i < nums.length; i++) {

        if(seen.has(nums[i])) {
            return true
        }

        seen.add(nums[i])
    }

    return false
    
};

//.includes is an O(n) operation. so if we call that inside a loop that requires
//use a set instead which is an O(1) operation so we are O(n) worst case
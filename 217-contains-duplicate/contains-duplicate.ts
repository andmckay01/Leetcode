function containsDuplicate(nums: number[]): boolean {

    let checked = new Set();

    for (let i = 0; i < nums.length; i++ ) {

        if (checked.has(nums[i])) return true

        checked.add(nums[i])

    }

    return false
    
};
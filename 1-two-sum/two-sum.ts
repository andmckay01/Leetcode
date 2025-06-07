function twoSum(nums: number[], target: number): number[] {

    let hashmap = new Map();

    for(let i = 0; i < nums.length; i++) {
        let numberNeeded = target - nums[i]

        if(hashmap.has(numberNeeded)) {
            return [hashmap.get(numberNeeded), i]
        }

        hashmap.set(nums[i], i)
    }
    
};
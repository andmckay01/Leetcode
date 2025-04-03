function twoSum(nums: number[], target: number): number[] {

    const hashmap = new Map(); //number and index of that number

    for(let i=0; i<nums.length; i++) {

        const numberNeeded = target - nums[i];

        if(hashmap.has(numberNeeded)) {
            return [hashmap.get(numberNeeded), i]
        }

        hashmap.set(nums[i], i);

    }
    
};
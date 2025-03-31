function twoSum(nums: number[], target: number): number[] {

    let hashmap = new Map(); //hashmap with the number and then the index of that number

    for(let i=0; i<nums.length; i++) {

        let numberNeeded = target - nums[i];

        if(hashmap.has(numberNeeded)) {
            return [hashmap.get(numberNeeded), i]
        }

        hashmap.set(nums[i], i)

    }
    
};
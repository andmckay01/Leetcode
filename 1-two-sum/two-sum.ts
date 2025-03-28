function twoSum(nums: number[], target: number): number[] {

    let hashmap = new Map(); //hashmap with number and index of number

    for(let i=0; i<nums.length; i++) {
        //iterate through number, add to map, check if numberNeeded is in map and return if so
        let numberNeeded = target - nums[i]
        if(hashmap.has(numberNeeded)) {
            return [hashmap.get(numberNeeded), i]
        }

        hashmap.set(nums[i], i);

    }
    
};
function twoSum(nums: number[], target: number): number[] {

    let hashmap = new Map(); //number as key and index of number as value

    for(let i=0; i<nums.length; i++) {
        let numberNeeded = target - nums[i];

        if(hashmap.has(numberNeeded)) {
            return [hashmap.get(numberNeeded), i]
        }

        hashmap.set(nums[i], i);

    }

    //no return needed here because problem has exactly one solution

    
};
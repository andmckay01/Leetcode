function twoSum(nums: number[], target: number): number[] {

    /*
    array nums
    integer target
    return two numbers
    go through the array, save the indices, return the indices when we have the target
    */

    let hashmap = new Map(); //number and index of that number

    for(let i=0; i<nums.length; i++) {

        let numberNeeded = target - nums[i]

        if(hashmap.has(numberNeeded)) return [hashmap.get(numberNeeded), i]

        hashmap.set(nums[i], i)

    }
    
};
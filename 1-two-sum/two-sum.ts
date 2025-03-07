function twoSum(nums: number[], target: number): number[] {

    //will store number and associated index
    let numToIndex = new Map();

    for(let i=0; i<nums.length; i++) {

        let numberNeeded = target - nums[i];

        if(numToIndex.has(numberNeeded)) {
            return [numToIndex.get(numberNeeded), i];
        }

        numToIndex.set(nums[i], i);
    }

    //assume each one has exactly one solution so we do not return 

}
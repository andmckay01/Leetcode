function twoSum(nums: number[], target: number): number[] {

    const numberToIndex = {}

    for(let i=0; i < nums.length; i++) {

        let numberNeeded = target - nums[i];

        if(numberToIndex[numberNeeded] != undefined) {
            return [numberToIndex[numberNeeded], i]
        }

        numberToIndex[nums[i]] = i;

    }

}
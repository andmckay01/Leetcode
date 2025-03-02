function twoSum(nums: number[], target: number): number[] {

    const numberToIndex = {}

    for(let i=0; i < nums.length; i++) {
        numberToIndex[nums[i]] = i; //add nums and the index of them to dict
    }

    for(let i=0; i < nums.length; i++) {

        let numberNeeded = target - nums[i];

        if(numberToIndex[numberNeeded] != undefined  && numberToIndex[numberNeeded] != i) {
            return [numberToIndex[numberNeeded], i]
        }

    }

}
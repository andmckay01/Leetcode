function twoSum(nums: number[], target: number): number[] {

const numberToIndex = {}

for (let i = 0; i < nums.length; i++) {
    numberToIndex[nums[i]] = i; //adding number, and the index of that number, to the object
}

for (let i = 0; i < nums.length; i++) {
    const numberNeeded = target - nums[i] //target minus current number

    if (numberToIndex[numberNeeded] != undefined && numberToIndex[numberNeeded] != i) {
        return [i, numberToIndex[numberNeeded]]
        }
    }
}
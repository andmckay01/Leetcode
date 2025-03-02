function twoSum(nums: number[], target: number): number[] {

const numberToIndex = {}

for (let i = 0; i < nums.length; i++) {
    let numberNeeded = target - nums[i] //target minus current number

    if (numberToIndex[numberNeeded] != undefined) {
        return [i, numberToIndex[numberNeeded]]
        }

    numberToIndex[nums[i]] = i; //adding number, and the index of that number, to the object

    }
}
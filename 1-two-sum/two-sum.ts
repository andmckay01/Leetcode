function twoSum(nums: number[], target: number): number[] {

const numberToIndex = {}

//add numbers and their indices to the dictionary
// for(let i = 0; i < nums.length; i++) {
//     numberToIndex[nums[i]] = i //adds number and its index to the dictionary
// }

for(let i = 0; i < nums.length; i++) {
    const numberNeeded = target - nums[i];

    if (numberToIndex[numberNeeded] !== undefined && numberToIndex[numberNeeded] !== i) {

        return [i, numberToIndex[numberNeeded]];
    }

numberToIndex[nums[i]] = i
}
};
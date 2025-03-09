function twoSum(nums: number[], target: number): number[] {

    let numberToIndex = new Map(); //map is number and then the index of that number

    for(let i=0; i<nums.length; i++) {

        let numberNeeded = target - nums[i];
        
        //check numbers in index
        if(numberToIndex.has(numberNeeded)) {
            return [numberToIndex.get(numberNeeded), i] //get index??
        }

        //add numbers to the map
        numberToIndex.set(nums[i], i)//number and index of that number

    }


}
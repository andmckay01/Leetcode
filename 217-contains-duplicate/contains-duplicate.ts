function containsDuplicate(nums: number[]): boolean {

    //map: has, set, get (which gets the value of the key
    //set: has, add, no get

    let numberSet = new Set();
    for(let i=0; i<nums.length; i++) {

        if(numberSet.has(nums[i])) { //check set for that number
            return true
        }

        numberSet.add(nums[i]); //add to set if we haven't found a duplicate yet

    }

    return false

    
};
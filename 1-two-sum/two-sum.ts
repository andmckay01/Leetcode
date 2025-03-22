function twoSum(nums: number[], target: number): number[] {
    
    const hashmap = new Map(); //has and set and get

    //loops through all the numbers
    for(let i=0; i<nums.length; i++) {

        let numberNeeded = target - nums[i]; //target - value = numberNeeded

        //this needs to be before the setting
        if(hashmap.has(numberNeeded)) {
            return [i, hashmap.get(numberNeeded)] //return the current index and the index of number needed
        }

        hashmap.set(nums[i], i); //adds value and the index of that value to our hashmap



        //once this is done, we loop to the next number in the array and try it again. This is O(1) time since we only have to at worst loop through the array once




    }


    
};
function twoSum(nums: number[], target: number): number[] {
    
    const hashmap = new Map(); //has and set and get

    //loops through all the numbers
    for(let i=0; i<nums.length; i++) {

        let numberNeeded = target - nums[i]; //target - value = numberNeeded

        //this needs to be before the setting otherwise you may use the existing index twice
        if(hashmap.has(numberNeeded)) {
            return [i, hashmap.get(numberNeeded)] //return the current index and the index of number needed
        }

        hashmap.set(nums[i], i); //adds value and the index of that value to our hashmap

        // O(1) constant time since we only have to loop through each value once, worst case

    }
    
};
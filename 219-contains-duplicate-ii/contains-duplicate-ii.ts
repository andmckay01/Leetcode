function containsNearbyDuplicate(nums: number[], k: number): boolean {

    let hashmap = new Map(); //number and index

    for (let i = 0; i < nums.length; i++) {

        //check condition
        if (Math.abs(hashmap.get(nums[i]) - i) <= k) {
            return true
        } else {
            hashmap.set(nums[i], i);
        }

    }

    return false;

};
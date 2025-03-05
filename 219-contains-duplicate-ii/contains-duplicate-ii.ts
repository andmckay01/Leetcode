
function containsNearbyDuplicate(nums: number[], k: number): boolean {

    const window = new Set();

    for(let i = 0; i < nums.length; i++) {
        if(window.has(nums[i])) {
            return true; //return true if the window this index already
            //but we have to remove other numbers from the index 
        }

        window.add(nums[i]); //add current number

        if(i >= k) { //remove the oldest element if we've processed k+1 elements
            window.delete(nums[i-k])
        }
    }
    
    return false

}

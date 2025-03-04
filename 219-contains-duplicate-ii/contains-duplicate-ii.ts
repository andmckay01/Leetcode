function containsNearbyDuplicate(nums: number[], k: number): boolean {

    /*
    we need a hashmap of the number and the index of that number
    We then use this hashmap to compare the current number to one in our hashmap
    Check if abs(i-j) <= k and return true
    */

    let num_to_i = {};

    //finding 2 integers that are the same and sufficiently close (k)
    for(let i = 0; i < nums.length; i++) {
        if (num_to_i.hasOwnProperty(nums[i])) {
            if (Math.abs(num_to_i[nums[i]] - i) <= k) {
                return true
            }
        }

        num_to_i[nums[i]] = i
    }

    return false



    /*
    Most dictionary operations are O(1) time complexity except:
    1. Iterating through all keys/values: O(n)
    2. Object.keys(), Object.values(), Object.entries(): O(n)
    3. Finding a value without knowing its key: O(n)
    */
    
};
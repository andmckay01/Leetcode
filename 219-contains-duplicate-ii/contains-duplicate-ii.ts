function containsNearbyDuplicate(nums: number[], k: number): boolean {

    let hashmap = new Map(); //key=number, index=value

    for(let i=0; i<nums.length; i++) { //n time complexity worst case

        //check if our condition is mep
        if(hashmap.has(nums[i])) { //constant time
            if(Math.abs(hashmap.get(nums[i]) - i) <= k) { //constant time
                return true
            }
        }

        //if not, we add to the hashmap
        hashmap.set(nums[i], i) //constant time

    }

    return false //O(n) time and space complexity

};

/*
Most dictionary operations are O(1) time complexity except:
1. Iterating through all keys/values: O(n)
2. Object.keys(), Object.values(), Object.entries(): O(n)
3. Finding a value without knowing its key: O(n)
*/
// function containsNearbyDuplicate(nums: number[], k: number): boolean {

//     /*
//     we need a hashmap of the number and the index of that number
//     We then use this hashmap to compare the current number to one in our hashmap
//     Check if abs(i-j) <= k and return true
//     */

//     let num_to_i = {};

//     //finding 2 integers that are the same and sufficiently close (k)
//     for(let i = 0; i < nums.length; i++) {
//         if (nums[i] in num_to_i) {
//             if (Math.abs(num_to_i[nums[i]] - i) <= k) {
//                 return true
//             }
//         }

//         num_to_i[nums[i]] = i
//     }

//     return false



//     /*
//     Most dictionary operations are O(1) time complexity except:
//     1. Iterating through all keys/values: O(n)
//     2. Object.keys(), Object.values(), Object.entries(): O(n)
//     3. Finding a value without knowing its key: O(n)
//     */
    
// };


// //NEW NEW
// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//     // Edge cases
//     if (k <= 0) return false;
//     if (nums.length <= 1) return false;
    
//     const numToIndex = new Map<number, number>();
    
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
        
//         // If we've seen this number before and it's within k positions
//         if (numToIndex.has(num) && i - numToIndex.get(num)! <= k) {
//             return true;
//         }
        
//         // Always update the most recent index for this number
//         numToIndex.set(num, i);
//     }
    
//     return false;
// }

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    // Edge cases for immediate return
    if (k <= 0 || nums.length <= 1) return false;
    
    // For small k values, using a sliding window with a Set is more efficient
    if (k < 10000) {
        const window = new Set<number>();
        
        for (let i = 0; i < nums.length; i++) {
            // If window size exceeds k, remove the oldest element
            if (i > k) {
                window.delete(nums[i - k - 1]);
            }
            
            // If current number is already in our window, we found a duplicate within distance k
            if (window.has(nums[i])) {
                return true;
            }
            
            // Add current number to window
            window.add(nums[i]);
        }
        
        return false;
    } 
    
    // For large k values, the Map approach is more efficient
    else {
        const numToIndex = new Map<number, number>();
        
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            
            if (numToIndex.has(num)) {
                const prevIndex = numToIndex.get(num)!;
                if (i - prevIndex <= k) {
                    return true;
                }
            }
            
            numToIndex.set(num, i);
        }
        
        return false;
    }
}
function containsNearbyDuplicate(nums: number[], k: number): boolean {

    //return true if there are 2 indices where the numbers equal and are within k distance of eachother

    //return boolean

    /*
    need a map or a set??
    As we iterate through we want to track the number and index in a map
    As we iterate through again we want to check if the number =, and then check if k is true
    //if it is we return true
    //else we return false
    */

    let hashmap = new Map(); //key=number, index=value

    for(let i=0; i<nums.length; i++) {

        //check if our condition is mep
        if(hashmap.has(nums[i])) {
            if(Math.abs(hashmap.get(nums[i]) - i) <= k) {
                return true
            }
        }

        //if not, we add (set) to the hashmap
        hashmap.set(nums[i], i)


    }

    return false

};






















/*
Most dictionary operations are O(1) time complexity except:
1. Iterating through all keys/values: O(n)
2. Object.keys(), Object.values(), Object.entries(): O(n)
3. Finding a value without knowing its key: O(n)
*/

/*
Other approaches are below. None of them performed as well as what we have above.

*/



// //TRY #1
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

// TRY FROM CLAUDE USING 2 DIFFERENT ALGORITHMS DEPENDING ON THE SIZE OF K
// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//     // Edge cases for immediate return
//     if (k <= 0 || nums.length <= 1) return false;
    
//     // For small k values, using a sliding window with a Set is more efficient
//     if (k < 10000) {
//         const window = new Set<number>();
        
//         for (let i = 0; i < nums.length; i++) {
//             // If window size exceeds k, remove the oldest element
//             if (i > k) {
//                 window.delete(nums[i - k - 1]);
//             }
            
//             // If current number is already in our window, we found a duplicate within distance k
//             if (window.has(nums[i])) {
//                 return true;
//             }
            
//             // Add current number to window
//             window.add(nums[i]);
//         }
        
//         return false;
//     } 
    
//     // For large k values, the Map approach is more efficient
//     else {
//         const numToIndex = new Map<number, number>();
        
//         for (let i = 0; i < nums.length; i++) {
//             const num = nums[i];
            
//             if (numToIndex.has(num)) {
//                 const prevIndex = numToIndex.get(num)!;
//                 if (i - prevIndex <= k) {
//                     return true;
//                 }
//             }
            
//             numToIndex.set(num, i);
//         }
        
//         return false;
//     }
// }



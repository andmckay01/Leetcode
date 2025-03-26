function topKFrequent(nums: number[], k: number): number[] {

    /*
    need a map with the value and the count of those values
    need an array of arrays where each index is the count and each value is an array of the elements we found (need to return those elements)

    */

    let count = new Map();
    let freq = Array.from({length: nums.length + 1}, () => []) //array with arrays to put elements in, + 1 is necessary
    console.log(freq);

    //add numbers to count
    for(let i=0; i<nums.length; i++) {
        count.set(nums[i], 1 + (count.get(nums[i]) || 0)) //set the number as 1 or 1 + what's already there
    }
    console.log(count);

    //once we have the counts, add elements to the arrays
    for(let [num, frequency] of count) {
        freq[frequency].push(num); //push that number to the frequency array at that count (index)
    }
    console.log(freq);

    //then we iterate through the frequency array in reverse
    let res = [];
    for(let i=freq.length - 1; i>=0; i--) { //must have -1 otherwise we trie to access more than the array
        for(let value of freq[i]) {
            res.push(value);
            if(res.length >= k) {
                return res;
            }
        }
    }
    //"It is guaranteed that the answer is unique." -> no edge case for there being too many elements

    //This whole thing is O(n + n + n) = O(n) time complexity 
    //It also has O(n) space complexity because we are only using memory linearly to solve this


    
};
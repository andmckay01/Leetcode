function topKFrequent(nums: number[], k: number): number[] {

    /*
    steps:
    1. iterate through the numbers and add the count to a map
    2. add the numbers to the array with the index as the count
    3. iterate in reverse, adding the numbers to a res, and then return
    */

    let count = new Map(); //number: count
    let freq = Array.from({length: nums.length + 1}, () => [])

    //count the occurence of each number
    for(let i=0; i<nums.length; i++) {
        if(count.has(nums[i])) {
            count.set(nums[i], count.get(nums[i]) + 1);
        } else {
            count.set(nums[i], 1);
        }
    }

    //add to the freq array with the index being our count
    for(let [num, frequency] of count) {
        freq[frequency].push(num)
        // freq[frequency] = num;
    }

    //iterate in reverse
    let res = [];
    for(let i=freq.length-1; i>=0; i--) {
        for(let value of freq[i]) {
            res.push(value)
            if(res.length >= k) {
                return res
            }
        }
    }
    
};
function topKFrequent(nums: number[], k: number): number[] {

    /*
    we need to iterate through once, adding items to a map
    then we iterate through the map, adding items to an array in reverse order of the count
    must be O(n) where we simply need to loop through twice
    */

    //will add to a map with the number as the key and updating the count as the value
    let freq = new Map();
    let orderedArray = Array.from({length: nums.length + 1}, () => [])

    //initial loop to add counts
    for (let num of nums) {
        if (freq.has(num)) {
            freq.set(num, freq.get(num) + 1); //add 1 to the count
        } else {
            freq.set(num, 1);
        }
    }

    //second loop to add counts to the array
    for (let [num, count] of freq) {
        orderedArray[count].push(num);
    }

    //iterate in reverse, adding numbers to res object
    let res = [];
    for (let i = orderedArray.length - 1; i >= 0; i--) {
        for (let value of orderedArray[i]) {
            res.push(value);
            if (res.length >= k) {
                return res;
            }
        }
    }
};
function topKFrequent(nums: number[], k: number): number[] {
    /*
    O(n) space and time complexity
    1. Add hashmap (this will be used to count)
    2. Create an array with the length of values of the input array
       The index will be the freq and the values will be a list of values [1,2]
    3. Loop through the input nums and add to count
    4. Loop through count and add to our array

    4. Create res and build that as we iterate through the array of length descending order
    Response is array of the values that occured the most
    */

    let count = new Map(); //key is number, value is count
    let freq = Array.from({length: nums.length + 1}, () => []) //key is count, value is array of numbers with that count
    console.log(freq);

    for(const n of nums) { // add numbers to count map
        count.set(n, 1 + (count.get(n) || 0))
    }

    console.log(count);

    // loop through count and add them to the correct location in freq array [[]]
    for(const [num, frequency] of count) { //map is on object
        console.log(num, frequency);
        freq[frequency].push(parseInt(num));
    }

    console.log(freq);

    const res = []
    //loop descending from our freq array and pull out the k elements into a res array
    for(let i=freq.length - 1; i>0; i--) { //this is how to do a for loop in reverse
        for(const n of freq[i])
            res.push(n); //add number to response
            if (res.length == k) {
                return res
            }
    }
    
};
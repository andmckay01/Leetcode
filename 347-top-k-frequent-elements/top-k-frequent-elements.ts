function topKFrequent(nums: number[], k: number): number[] {

    let count = new Map(); //count is a simple count. Each element and each associated count
    let freq = Array.from({length: nums.length + 1}, () => []); //array with an array as the value

    //first we add our counts to the count map
    for(const n of nums) {
        count.set(n, 1 + (count.get(n) || 0))
    }

    //loop through the map and add things to our freq array
    for(const [num, frequency] of count) {
        freq[frequency].push(num); //why not [num]?
    }

    let res = [];
    for(let i=freq.length-1; i>0; i--) {
        for(const n of freq[i]) {
            res.push(n);
            if(res.length == k) {
                return res
            }
        }
    }
    return res

};
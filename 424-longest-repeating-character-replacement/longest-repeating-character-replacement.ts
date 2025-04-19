function characterReplacement(s: string, k: number): number {

    /*
    sliding window where l and r start at the left
    we increment and replace whichever characters occur the least
    we have a count map where we are saving incrementing and decrementing the values of characters in our window
    */

    let count = new Map();
    let l = 0;
    let res = 0;

    //main loop that controls how far we move to the right
    for(let r = 0; r < s.length; r++) {
        // const length = 1 + r - l;

        //set the count of characters
        count.set(s[r], (count.get(s[r]) || 0) + 1);

        //if condition fails we reduce count and reduce our window
        if(1 + r - l - Math.max(...count.values()) > k) {
            count.set(s[l], count.get(s[l]) - 1); //reduce count
            l++; //increment l
        
        //if condition passes we save to res and widen our window
        } else {
            res = Math.max(res, 1 + r - l)
        }
    }

    return res;
    
};
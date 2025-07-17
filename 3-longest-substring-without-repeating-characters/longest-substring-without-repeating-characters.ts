function lengthOfLongestSubstring(s: string): number {

    let charSet = new Set();
    let l = 0;
    let maxLength = 0;

    //r is our implicit right pointer
    for(let r=0; r<s.length; r++) {

        while(charSet.has(s[r])) {
            charSet.delete(s[l]) //remove from set
            l++; //increment
        }

        charSet.add(s[r]); //add to the set

        maxLength = Math.max(maxLength, r - l + 1); //compute maxLength

    }

    return maxLength
    
};


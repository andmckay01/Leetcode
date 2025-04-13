function lengthOfLongestSubstring(s: string): number {

    /*
    main string
    use a sliding window, move left of window if we find a duplicate
    use a set to find duplicates (sets can only have one of each character)
    variable with the longest length
    */

    let charSet = new Set();
    let l = 0;
    let maxLength = 0;

    //c is our implicit right pointer
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
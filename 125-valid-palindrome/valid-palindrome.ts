function isPalindrome(s: string): boolean {

    let l=0
    let r = s.length - 1 - l; //j is at end
    while(l < r) { //looping i from start to j, if one half works the other half will too

        //move pointers until we have alphaNum
        while(l < r && !alphaNum(s[l])) {
            l++
        }
        while(r > l && !alphaNum(s[r])) {
            r--
        }

        //if these are not the same, return false
        if(s[l].toLowerCase() != s[r].toLowerCase()) return false

        //iterate pointers
        l++, r--

    }

    //if nothing flags
    return true;
    
};

function alphaNum(c) {
    return (c >= 'A' && c <= 'Z' || 
            c >= 'a' && c <= 'z' || 
            c >= '0' && c <= '9');
};

//n for main while loop gives us O(n) for time complexity
//O(1) for space complexity because we're not creating any new string
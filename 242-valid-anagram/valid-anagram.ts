function isAnagram(s: string, t: string): boolean {

    //base case
    if (s.length != t.length) {
        return false;
    }

    let characterArray = new Array(26).fill(0);

    //loop through
    for (let i = 0; i < s.length; i++) {
        characterArray[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
        characterArray[t[i].charCodeAt(0) - "a".charCodeAt(0)]--;
    }

    //if every value is 0, return true else return false
    return characterArray.every(freq => !freq);
    
};
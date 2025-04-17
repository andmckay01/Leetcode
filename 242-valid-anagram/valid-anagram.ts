function isAnagram(s: string, t: string): boolean {

    /*
    consist of lowercase english letters (no characters)
    we can simply iterate through both of these O(n + m) time space -> reduces to O(n)
    if the inputs contain unicode characters we would use
    */

    if(s.length !== t.length) return false

    let characterArray = new Array(26).fill(0); //array with 26 characters

    for(let i=0; i<s.length; i++) {

        characterArray[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
        characterArray[t[i].charCodeAt(0) - "a".charCodeAt(0)]--

    }

    return characterArray.every(freq => !freq);
    
};
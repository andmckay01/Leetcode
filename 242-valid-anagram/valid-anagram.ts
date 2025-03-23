function isAnagram(s: string, t: string): boolean {

    //an anagram is a word that is rearanged into another word

    /*
    this solution is good with O(n) space complexity but also O(n) memory complexity which is not as good, we shouldn't need all that memory.
    */

    //SOLUTION 1: pretty good
    // if(s.length != t.length) {
    //     return false
    // }

    // let sMap = new Map();
    // let tMap = new Map();

    // for(let i=0; i<s.length; i++) {
    //     //set chars and increment
    //     sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    //     tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
    // }

    // for(const [key, value] of sMap.entries()) {
    //     if(value != tMap.get(key)) {
    //         return false;
    //     }
    // }

    // return true

    //FINAL SOLUTION: only works if all letters are lowercase so we can use the ASCII characters
    if(s.length !== t.length) return false

    let letters = new Array(26).fill(0); //new array with 26 values all filled with 0

    //both are the same length so we can use either to drive the algorithm
    for(let i=0; i<s.length; i++) {
        letters[s.charCodeAt(i) - 97]++; //add one in this position if found in s
        letters[t.charCodeAt(i) - 97]--; //remove if found in t
    }

    return letters.every(freq => !freq); //every value should be falsy aka 0.

};
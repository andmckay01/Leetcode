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
    if(s.length !== t.length) return false;

    const array = new Array(26).fill(0);

    for(let i = 0; i < s.length; i++) {
        array[s.charCodeAt(i) - 97]++; //charCode for a is 97, b is 98, ...
        array[t.charCodeAt(i) - 97]--;
    }

    return array.every(freq => !freq); //.every is an array method that tests if all elements pass a condition

};
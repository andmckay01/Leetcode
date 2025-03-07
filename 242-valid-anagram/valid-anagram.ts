function isAnagram(s: string, t: string): boolean {

    //an anagram is a word that is rearanged into another word

    /*
    this solution is good with O(n) space complexity but also O(n) memory complexity which is not as good, we shouldn't need all that memory.
    */

    return s.split('').sort().join('') == t.split('').sort().join('')



};
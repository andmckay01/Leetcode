function isAnagram(s: string, t: string): boolean {

    //an anagram is a word that is rearanged into another word
    
    /*
    this solution is good with O(n) space complexity but not as good
    from with memory. We need a hash table (which we will learn later)
    */
    //SOLUTION 1, pretty good
    if(s.length != t.length) {
        return false
    }

    let sMap = new Map();
    let tMap = new Map();

    for(let i=0; i<s.length; i++) {
        //set chars and increment
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
        tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
    }

    for(const [key, value] of sMap.entries()) {
        if(value != tMap.get(key)) {
            return false;
        }
    }

    return true

};
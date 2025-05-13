function groupAnagrams(strs: string[]): string[][] {

    /*
    an anagram has the same number of each letter, we need to use an array for this
    then we conver this array to a string
    then we use this as the key in a map
    */

    let group = new Map();

    for (let s of strs) {

        let characterArray = new Array(26).fill(0);

        //add to character array
        for (let c of s) {
            characterArray[c.charCodeAt(0) - 97]++;
        }

        //to string
        let key = characterArray.toString();

        //add to the map 
        if ( group.has(key) ) {
            group.set(key, [...group.get(key), s]);
        } else {
            group.set(key, [s]);
        }

    }

    return [...group.values()];
    
};
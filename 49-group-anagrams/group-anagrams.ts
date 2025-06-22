function groupAnagrams(strs: string[]): string[][] {

    /*
    create a map
    loop through each letter and add to an array, convert to a string, use this as the key in the map
    */

    let group = new Map();

    for (let s of strs) {

        let characterKey = new Array(26).fill(0);

        for (let c of s) {
            characterKey[c.charCodeAt(0) - "a".charCodeAt(0)]++;
        }

        let key = characterKey.toString();

        if(group.has(key)) {
            group.set(key, [...group.get(key), s])
        } else {
            group.set(key, [s]);
        }

    }

    return [...group.values()]
    
};
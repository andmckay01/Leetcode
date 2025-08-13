function groupAnagrams(strs: string[]): string[][] {

    /*
    loop over every character in the string and convert to character code
    use this character code as the key in a map
    spread over the map and return in an array
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

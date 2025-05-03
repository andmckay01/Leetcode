function groupAnagrams(strs: string[]): string[][] {

    /*
    use a character array to set a key for group
    collapse to string, write to an array of arrays

    */

    let res = new Map<string, string[]>();

    for (let i = 0; i < strs.length; i++ ) {
        
        let characterArray = new Array(26).fill(0);

        for (let c of strs[i]) {
            characterArray[c.charCodeAt(0) - "a".charCodeAt(0)]++;
        }

        const key = characterArray.toString();

        if( res.has(key) ) {
            res.set(key, [...res.get(key), strs[i]])
        } else {
            res.set(key, [strs[i]])
        }
    }

    return [...res.values()]
    
};

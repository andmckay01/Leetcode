function groupAnagrams(strs: string[]): string[][] {

    /*
    lowercase english letters -> dictionary where 
    1. count characters
    2. construct key
    3. add to a map
    4. return the words in this map
    */

    let grouped = new Map<string, string[]>();

    for(let i=0; i<strs.length; i++) {

        const word: string = strs[i]

        const characterArray = new Array(26).fill(0); //array with 26 0's

        for(let c of word) {

            characterArray[c.charCodeAt(0) - "a".charCodeAt(0)]++;

        }

        let key = characterArray.toString();

        if(grouped.has(key)) {
            grouped.set(key, [...grouped.get(key), word])
        } else {
            grouped.set(key, [word])
        }

    }

    return [...grouped.values()]

    
};
function groupAnagrams(strs: string[]): string[][] {

    /*
    need a way to determine if each string has the same amount of characters

    loop through the strings, determine characters, collapse this into a key, save the string to the array of arrays with the key

    return using spread operator for every group within the array
    */

    const result = new Map();

    for(let i=0; i<strs.length; i++) {

        const word = strs[i];

        const letterCount = new Array(26).fill(0); //array with 26 entries and all 0
        for(let c=0; c<word.length; c++) {
            const charCode = word[c].charCodeAt(0) - "a".charCodeAt(0);
            letterCount[charCode]++; //add one to that index
        }

        const key = letterCount.toString(); //collapse array into the letter count
        
        //if result has key, spread the word into existing. if not, set a new one
        result.set(key, result.has(key) ? [...result.get(key), word] : [word]);

    }

    return [...result.values()]


    
};
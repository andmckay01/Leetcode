function groupAnagrams(strs: string[]): string[][] {

    /*
    what we need:
    1. way to determine anagrams -> array with 26 elements each representing a character (strs[i] consists of lowercase English letters.)
    2. Array of arrays where we store the values in each particular section as we move through it
      a) key is the ordered letterset


    */

    let group = new Map(); //set, get, has

    for (let i=0; i<strs.length; i++) {
        let letterArray = new Array(26).fill(0);
        let word = strs[i];

        for(let c=0; c<word.length; c++) {
            console.log(word.charCodeAt(c))
            let index = word.charCodeAt(c) - "a".charCodeAt(0); //gives us the index number
            letterArray[index] = letterArray[index] += 1; //add 1 to the value at that index
        }

        //once done we have an array 
        let letters = letterArray.toString()

        group.set(letters, group.has(letters) ? [...group.get(letters), word] : [word]);

        // //we can simplify this
        // if(group.has(letters)) {
        //     group.set(letters, group.get(letters) + 1)
        // } else { //else we add a new one
        //     group.set(letters, 1)
        // }

        //we need to use proper notation to have a map with {key1: [], key2: []}
        //then we need to iterate through these on the return

    }




    return [...group.values()]

    
};
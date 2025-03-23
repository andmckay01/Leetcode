function groupAnagrams(strs: string[]): string[][] {

    //accessing a value of an index in an array is constant time

    let groupings = new Map(); //can be empty

    for(let s=0; s<strs.length; s++) { //loop through every string strs[s]

        let group = new Array(26).fill(0); //array with 26 zeros

        for(let c=0; c<strs[s].length; c++) { //loop through every character c
            group[strs[s].charCodeAt(c) - "a".charCodeAt(0)]++ //"a" is 97
        }

        //convert to string array (see below for why)
        const key = group.toString();

        //create the key value if it does not exist
        if(!groupings.has(key)) {
            groupings.set(key, []) //key with value of empty array 
        }

        //add to that key. Get is a map method and push is an array method
        groupings.get(key).push(strs[s])

    }

    //return an array of each value of groupings using the spread operator
    return [...groupings.values()];

    //or we could have this below but it is less efficient
    // return Array.from(groupings.values());

};
    
/*
cannot do the following
array1 = [1,2,3]
array2 = array1
array3 = [1,2,3]
array2 == array3 //false because these are different arrays in memory
array1 == array2 //true because therse are the same arrays in memory
instead, we need to convert these arrays to strings

*/

    

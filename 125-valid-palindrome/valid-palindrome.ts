function alphaNum(c: string): boolean {
    return (c >= "A" && c <= "Z" ||
        c >= "a" && c <= "z" ||
        c >= "0" && c <= "9")
}

function isPalindrome(s: string): boolean {

    /*
    convert and remove all spaces
    left and right pointer
    increment while checking for the pointers to be equal
    stop once the pointers equal eachother
    */

    let l = 0;
    let r = s.length - 1;

    let lowercase = s.toLowerCase();

    //increment right until we have character
    //increment left until we have character

    while(l < r) {

        //increment until we have a alphaNum characters
        while(l < r && !alphaNum(lowercase[l])) l++;
        while(l < r && !alphaNum(lowercase[r])) r--;

        console.log(lowercase[l], lowercase[r])

        if(lowercase[l] !== lowercase[r]) return false;

        //iterate 1 after the check
        l++, r--;

    }

    return true
    
};
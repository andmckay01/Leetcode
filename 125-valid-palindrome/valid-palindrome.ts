function isPalindrome(s: string): boolean {

    /*
    use left and right pointers
    use while loops to iterate if it's not an alphanumeric character
    main while loop 
    break at any point
    return true at bottom
    */

    let l = 0;
    let r = s.length - 1;

    console.log(s);

    while(l <= r) { //equal to?

        //increment until we are at alphaNum
        while(l < r && !isAlphaNum(s[l])) {
            l++;
        }

        while(l < r && !isAlphaNum(s[r])) {
            r--;
        }

        if(s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false
        } else {
            l++;
            r--;
        }
    }

    return true

    
};

function isAlphaNum(c: string): boolean {
    return (c >= "a" && c <= "z" ||
            c >= "A" && c <= "Z" ||
            c >= "0" && c <= "9")
}
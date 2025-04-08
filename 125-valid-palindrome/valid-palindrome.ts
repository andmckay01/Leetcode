function isPalindrome(s: string): boolean {

    /*
    use alpha num, toString(), iterate through something that is not alphanum
    use pointers left and right
    check if all are equal, return false if they ever are not
    */

    let l = 0;
    let r = s.length - 1;

    while(l <= r) {

        //increment our left and right pointers until we find alphaNum
        while(l < r && !isAlphaNum(s[l])) {
            l++;
        }

        while(l < r && !isAlphaNum(s[r])) {
            r--;
        }

        //check equality and then increment
        if(s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
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
};
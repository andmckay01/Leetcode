function isPalindrome(s: string): boolean {

    let l = 0;
    let r = s.length - 1;

    while(l <= r) {

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

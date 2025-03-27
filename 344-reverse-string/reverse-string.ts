/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {

    //how do modify in place without causing an infinite loop?
    //instead of moving index value to beginning

    //infinite loop, as we add to the beginning it shifts i so we move infinitely
    let i=0;
    while(i<s.length) {
        s.unshift(s[i]) //add current character to beginning
        s.splice(i+1,1) // remove one element as we move
        
        i++ //increment i 
    }
};
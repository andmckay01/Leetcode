/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {

    let left=0;
    let right=s.length-1;

    while(left < right) {
        // let left = s[l]//save left
        [s[left], s[right]] = [s[right], s[left]] //swap left with right
        left++, right-- //increment pointers
    }

    // let i=0;
    // while(i<s.length) {
    //     s.unshift(s[i]) //add current character to beginning
    //     s.splice(i+1,1) // remove one element as we move
    //     i++ //increment i 
    // }
};
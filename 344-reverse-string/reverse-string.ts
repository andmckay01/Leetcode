/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let l = 0;
    let r = s.length -1;
    let temp;
   while(l < r){
    temp = s[l];
    s[l] = s[r];
    s[r] = temp;
    l++;
    r--;
   }
};

//the below works great but the destructuring array swap takes longer and more memory
//     let left=0;
//     let right=s.length-1;

//     while(left < right) {
//         // let left = s[l]//save left
//         [s[left], s[right]] = [s[right], s[left]] //swap left with right
//         left++, right-- //increment pointers
//     }
// };
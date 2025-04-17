function twoSum(numbers: number[], target: number): number[] {

    /*
    sorted input array tells me I can use binary search
    use left and right pointers to figure out what to add
    if our sum is less than we need, we need to most l up
    else we move r down
    */

    let l = 0;
    let r = numbers.length - 1;

    while(l < r) {

        let sum = numbers[l] + numbers[r];

        if(sum > target) {
            r--;
        } else if (sum < target) {
            l++;
        } else {
            return [l+1, r+1]
        }
    }
    
};
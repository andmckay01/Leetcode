function twoSum(numbers: number[], target: number): number[] {
    
    let l = 0;
    let r = numbers.length - 1;

    //since this is already in non-decreasing order
    //we know that we can simply increment and decrement and check for equality until it eventually finds numbers[l] + numbers[r] = target
    while(l < r) {
        let sum = numbers[l] + numbers[r];

        if(sum == target) {
            return [l+1, r+1];
        }

        if(sum > target) { //if greater than, we need a lower number
            r--;
        } else { //if less than, we need a higher number
            l++;
        }
    }
};
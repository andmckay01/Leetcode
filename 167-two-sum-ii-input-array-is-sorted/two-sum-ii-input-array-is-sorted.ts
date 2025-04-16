function twoSum(numbers: number[], target: number): number[] {

    /*
    sorted: tells us to use 2 pointers..use l and r and increment as we add them together to make target
    remember to add 1 to result array indices
    exactly one solution
    */

    let l = 0;
    let r = numbers.length - 1;

    //less than because we can't use the same number twice
    while(l < r) {
        
        let sum = numbers[l] + numbers[r];

        if(sum > target) {
            r--;
        } else if(sum < target) {
            l++;
        } else {
            return [l+1, r+1]; //sorted so we know this is the correct order
        }

    }

    //no return needed here because we are guaranteed exactly one solution
    
};
function threeSum(nums: number[]): number[][] {

    /*
    first we sort the array
    then we find the first value (a) 
    then we essentially do sorted twosum to find the other 2 values (b and c) that fulfill our condition
    O(n log n) + O(n^2) simplifies to O(n^2) time complexity
    It's also O(1) constant space
    */

    nums.sort((a,b) => a - b); //sort numbers array 
    let res = [];

    for(let i=0; i<nums.length; i++) { //this loop finds our a (initial value)
        let a = nums[i];
        if(i > 0 && a == nums[i-1]) { //this condition increments a until we find a different value
            continue 
        }

        let l = i + 1; //start at the next index
        let r = nums.length - 1; //start at our last index

        //find the other two values
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            
            if(sum > 0) { //if too big
                r--; //decrease sum
            } else if(sum < 0) {
                l++; //increase sum
            } else {
                res.push([a, nums[l], nums[r]]);
                l++;
                r--;
                while(nums[l] == nums[l-1] && l < r) {
                    l++;
                }
            }
        }
    }

    return res;
    
};
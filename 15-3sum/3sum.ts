function threeSum(nums: number[]): number[][] {

    /*
    sort everything

    main check to make sure b != a

    main loop to drive the loop with an a
    sub loop using pointers b and c to find combinations that work
      -> use binary search methodology to do this

    if a combination works, add it to res

    */

    nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < nums.length; i++) {

        //condition to decide if we've already seen this a number
        //do we need this to do an extra check??
        if (nums[i] == nums[i - 1]) {
            continue; //continue to the next number so we do not build a duplicate triplet
        }

        //define all of the triplets. a will stay in place, b and c will use binary search pattern 
        let a = i;
        let b = i + 1;
        let c = nums.length - 1;

        //need a check to make sure b is not the same as the last one

        while (b < c) {

            //before anything, we need to make sure that b is distinct
            while(b < c && a == b) {
                b++;
            }
            
            let sum = nums[a] + nums[b] + nums[c];

            if (sum > 0) {
                c--;
            } else if (sum < 0) {
                b++;
            } else {
                res.push([nums[a], nums[b], nums[c]]);
                c--;
                b++;
                while (nums[b] == nums[b-1] && b < c) {
                    b++;
                }
            }
        }
    }

    return res;
    
};
function threeSum(nums: number[]): number[][] {

    /*
    sort everything

    main check to make sure b does not equal a

    main loop to drive the loop with an a
    sub loop for b and c to find combinations that work

    add to res if it works

    */

    nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == nums[i - 1]) {
            continue; //continue to the next number so we do not build a duplicate triplet
        }

        //a will stay in place, b and c will use binary search
        let a = i;
        let b = i + 1;
        let c = nums.length - 1;

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

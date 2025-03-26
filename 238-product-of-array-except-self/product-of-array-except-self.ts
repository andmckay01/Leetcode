function productExceptSelf(nums: number[]): number[] {
    /*
    prefix - compute from beginning
    postfix - compute from end
    combine these both into the output array
    default value of 1's will be on the ends of the computing arrays
    */

    //prefix iteration
    let prefix = [];
    let lastNumber = 1;
    for(let i=0; i<nums.length; i++) {
        let product = nums[i] * lastNumber //current number * last number
        prefix.push(product); //if at 3 then we loop to 4
        lastNumber = product;
    }

    //postfix iteration
    lastNumber = 1; //reinitialize lastNumber
    let postfix = []; //initialize with 1 at the start (end once reversed)
    for(let i=nums.length - 1; i>=0; i--) {
        let product = nums[i] * lastNumber //current number * last number
        postfix.push(product); //if at 3 then we loop to 4
        lastNumber = product;
    }
    postfix.reverse(); //reverse since we built it backwards

    //multiply 1 less and 1 more than the current for final product
    let res = [];
    for(let i=0; i<nums.length; i++) {
        let pre = i > 0 ? prefix[i-1] : 1;
        let post = i < postfix.length-1 ? postfix[i+1] : 1;
        res.push(pre * post)
    }

    return res
    
};
function minEatingSpeed(piles: number[], h: number): number {

    /*
    Every time you choose to eat you spend an hour no matter what
     -> this shows up as rounding to the nearest int Math.ceil (round up)

     Binary search
     Loop until we find a value where we spend the exact hours
     Otherwise, return the integer k (minimum integer to be able to eat all bananas in hours (h))
    */

    let l = 0;
    let r = Math.max(...piles); //remember to spread the array;
    let res = r;

    console.log(res);

    while(l <= r) {
        const k = Math.ceil((l + r) / 2);

        console.log('k: ', k);

        let hours = 0;
        for(let p of piles) {
            hours += Math.ceil(p / k);
        }

        if(hours <= h) {
            res = Math.min(res, k);
            r = k - 1;
        } else {
            l = k + 1;
        }

    }

    return res;
    
};
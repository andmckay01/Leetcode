function minEatingSpeed(piles: number[], h: number): number {

    /*
    If koko eats one pile she must eat that pile and only that pile for that hour, round with ceil
    our L and R pointers will be the amount of bananas to eat (k), set at min and max piles
    after we count hours used, we check if this is valid (hours <= h) and if so, update res
    -> then we make k more agressive (by incrementing l higher)
    else we make k less agressive by incrementing r lower
    */

    let l = 0;
    let r = Math.max(...piles);
    let kResponse = r; //the amount of bananas koko eats each hour, defaulted to worst case

    while(l <= r) {

        let hoursUsed = 0;
        let k = l + Math.ceil((r - l) / 2); //midpoint we want to try

        for(let p of piles) {
            hoursUsed += Math.ceil(p / k); //how many hours we use to eat each pile
        };

        console.log('hoursUsed: ', hoursUsed);
            console.log('kResponse: ', kResponse);

        if(hoursUsed <= h) {
            kResponse = Math.min(kResponse, k); //update response
            console.log('kResponse update: ', kResponse);

            r = k - 1; //increment to eat more (more aggressive)
        } else {
            l = k + 1; //increment to eat more
        }
    }

    return kResponse;
    
};
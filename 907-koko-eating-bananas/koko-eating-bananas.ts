function minEatingSpeed(piles: number[], h: number): number {

    /*
    use binary search to find the best pile
    instead of position, we use the height as our value to perform binary search on
    try a k. If it is too agressive, make it less aggressive. If it is not enough aggressive, try again

    dynamic programming

    Do we need to sort? yes, for binary search
    */


    //n log n??
    piles.sort((a, b) => a - b); //this is ascending, b - 1 is descending

    let min = 0;
    let max = Math.max(...piles); //r is max piles
    let kResponse = max;

    while (min <= max) {

        let hoursUsed = 0;
        let k = min + Math.floor((max - min) / 2);

        //run the simulation
        for (const p of piles) {
            hoursUsed += Math.ceil(p / k);
        }

        console.log('BEFORE')
        console.log(hoursUsed, h);
        console.log('min: ', min);
        console.log('k: ', k);
        console.log('max: ', max);
        console.log('-----------')

        //update k to eat more
        if (hoursUsed > h) {
            min = k + 1;

        } else { //update to eat less
            kResponse = Math.min(k, kResponse); //update k if we are at 0 or more hours
            max = k - 1;
        }

    }

    //once min and max equal eachother, we simply return k

    return kResponse;
    
};
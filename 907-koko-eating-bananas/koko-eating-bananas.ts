function minEatingSpeed(piles: number[], h: number): number {

    /*
    use binary search to find the best pile
    instead of position, we use the height as our value to perform binary search on
    try a k. If it is too agressive, make it less aggressive. If it is not enough aggressive, try again

    dynamic programming

    Do we need to sort? no, because binary search is being done on the actual values of piles
    */

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
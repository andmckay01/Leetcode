function insert(intervals: number[][], newInterval: number[]): number[][] {

    /*
    O(n) time because we simply iterate through (and it's already sorted in ascending order)
    We simply take our newInterval, loop through while saving to new Interval


    *one edge case is where intervals [2,5][5,10] equal eachother and need to be combined as well
    *do not save to result right away, only save to result if the new interval does not overlap with the current interval
    */

    let res = [];

    //check if it doesn't overlap
    for(let i = 0; i < intervals.length; i++) {

        console.log(res);

        console.log('new interval: ', newInterval);
        console.log('current interval: ', intervals[i]);

        //check if end of new interval is less than start of current interval
        if (newInterval[1] < intervals[i][0]) {
            res.push(newInterval);
            
            //no overlapping intervals means that if the newInterval does not overlap, we are done
            res.push(...intervals.slice(i));
            console.log(res);
            return res;
        
        //check if end of new interval is greater than the start of current interval
        } else if (newInterval[0] > intervals[i][1]) {
            //append this because it didn't overlap
            console.log('push interval');
            res.push(intervals[i]);

        //this is now our case if it does overlap
        } else {

            //if it overlaps we take the min of both and the max of both and combine them
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]

            console.log('new interval: ', newInterval);

            //we don't save to res yet because this new interval might overlap with our next interval[i]
        }
    }

    //at the end we will have a final newInterval left that needs to be appended
    res.push(newInterval);
    return res;
    
};
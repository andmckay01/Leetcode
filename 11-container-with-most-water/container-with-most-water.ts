function maxArea(height: number[]): number {

    /*
    use a 2 pointer approach where l starts at 0 and r is at end
    increment the lower of the 2
    save maxVolume as we go
    return when pointers meet our max value
    */

    let l = 0;
    let r = height.length - 1;
    let maxVolume = -Infinity;

    while (l < r) {

        //set max volume
        maxVolume = Math.max(maxVolume, Math.min(height[l], height[r]) * (r - l));

        //increment whichever is lower
        if ( height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return maxVolume;
    
};
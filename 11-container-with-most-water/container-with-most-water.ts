function maxArea(height: number[]): number {

    /*
    use left and right pointer
    move whichever is has the lower height
    save the max volume as a dynamic variable
    return when l and r =
    */

    let l = 0;
    let r = height.length - 1;
    let maxVolume = 0;

    while (l < r) {

        let newVolume = Math.min(height[r], height[l]) * (r - l)
        maxVolume = Math.max(maxVolume, newVolume);

        //increment whichever is lower
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }

    }

    return maxVolume
    
};
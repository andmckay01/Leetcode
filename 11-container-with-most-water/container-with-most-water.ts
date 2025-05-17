function maxArea(height: number[]): number {

    /*
    two pointer solution starting at left and right
    dynamic variable with the max volume
    */

    let l = 0;
    let r = height.length - 1;
    let maxVolume = -Infinity;

    while (l < r) {

        let currentVolume = Math.min(height[r], height[l]) * (r - l);

        maxVolume = Math.max(maxVolume, currentVolume);

        //increment whichever is lower
        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }

    }

    return maxVolume;
    
};
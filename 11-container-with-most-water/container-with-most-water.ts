function maxArea(height: number[]): number {

    let l = 0;
    let r = height.length - 1;
    let maxVolume = -Infinity;

    while (l < r) {
        let newVolume = (r - l) * Math.min(height[r], height[l]);
        maxVolume = Math.max(maxVolume, newVolume);

        //increment whichever is smaller
        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }
    }

    return maxVolume;
    
};

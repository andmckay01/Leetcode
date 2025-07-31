function maxArea(height: number[]): number {

    let l = 0;
    let r = height.length - 1;
    let maxVolume = -Infinity;

    while(l < r) {
        let newVolume = (r - l) * Math.min(height[r], height[l]);
        maxVolume = Math.max(maxVolume, newVolume);

        //move shorter one
        if (height[l] < height[r]) {
            l++
        } else {
            r--;
        }
    }

    return maxVolume;
    
};
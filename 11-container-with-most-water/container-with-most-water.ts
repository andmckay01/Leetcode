function maxArea(height: number[]): number {

    let maxVolume = -Infinity;
    let l = 0;
    let r = height.length - 1;

    while(l < r) {
        let newVolume = (r - l) * Math.min(height[l], height[r]);
        maxVolume = Math.max(maxVolume, newVolume);

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }

    }

    return maxVolume;
    
};
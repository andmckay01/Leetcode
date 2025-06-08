function maxArea(height: number[]): number {

    let l = 0;
    let r = height.length - 1;
    let maxVolume = -Infinity;

    while (l < r) {
        let newVolume = Math.min(height[l], height[r]) * (r - l);
        maxVolume = Math.max(maxVolume, newVolume);

        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }

    }

    return maxVolume;
    
};
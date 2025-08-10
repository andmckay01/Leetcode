function maxArea(height: number[]): number {

    let l = 0;
    let r = height.length - 1;
    let maxVolume = -Infinity;

    while(l < r) {

        const currentVolume = (r - l) * Math.min(height[l], height[r]);
        maxVolume = Math.max(currentVolume, maxVolume);

        if (height[r] > height[l]) {
            l++;
        } else {
            r--;
        }
        
    }

    return maxVolume

}
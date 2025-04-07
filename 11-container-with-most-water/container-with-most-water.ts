function maxArea(height: number[]): number {

    let l = 0;
    let r = height.length - 1;
    let maxVolume = 0;

    while(l < r) {

        let minHeight = Math.min(height[l], height[r]);
        maxVolume = Math.max(maxVolume, minHeight * (r - l));

        if(height[l] < height[r]) {
            l++
        } else {
            r--
        }

    }

    return maxVolume;
    
};
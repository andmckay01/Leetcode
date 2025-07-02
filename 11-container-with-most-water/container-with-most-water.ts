function maxArea(height: number[]): number {

    /*
    use l and r pointers
    calculate the water volume then shift whichever pointer corresponds to a smaller height
    */

    let l = 0;
    let r = height.length - 1;
    let maxVolume = -Infinity;

    while (l < r) {

        let volume = Math.min(height[l], height[r]) * (r - l);
        maxVolume = Math.max(volume, maxVolume);

        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }

    }

    return maxVolume;
    
};
function maxArea(height: number[]): number {

    /*
    2 pointer problem where we start on either end
    we only shift the lower of the 2 pointers
    this will be optimal and eventually arrive at the best solution
    */

    let l = 0;
    let r = height.length-1;
    let max = 0;

    while(l < r) {
        let area = (r-l) * Math.min(height[l], height[r]); //creates a rectangle

        if(area > max) max = area

        if(height[l] >= height[r]) {
            r--
        } else {
            l++
        }
    }

    return max
    
};
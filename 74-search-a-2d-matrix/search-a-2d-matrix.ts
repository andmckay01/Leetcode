function searchMatrix(matrix: number[][], target: number): boolean {

    /*
    treat as one long list since it's in order to simplifiy the problem
    use binary search where we compare target to the value
    */

    let rows = matrix.length;
    let cols = matrix[0].length;

    let l = 0;
    let r = rows * cols - 1; //full length of the matrix

    while(l <= r) {
        const m = l + Math.floor((r - l) / 2); //midpoint without integer overflow

        //find proper row and col based on m
        const row = Math.floor(m / cols);
        const col = m % cols; //the remainder divided by the total cols IS the current column index
        
        if(target > matrix[row][col]) {
            l = m + 1;
        } else if (target < matrix[row][col]) {
            r = m - 1;
        } else {
            return true
        }
        
    }

    return false
    
};

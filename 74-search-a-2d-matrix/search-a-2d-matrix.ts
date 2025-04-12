function searchMatrix(matrix: number[][], target: number): boolean {

    /*
    non-descending order tells us we can use binary search
    first find the row it's in
    then find the value in the row
    if nothing finds, then we return false
    */

    const ROWS = matrix.length;
    const COLS = matrix[0].length;

    let topRow = 0;
    let bottomRow = ROWS - 1;

    while(topRow <= bottomRow) {
        let currentRow = Math.floor((topRow + bottomRow) / 2);

        if(target >= matrix[currentRow][0] && target <= matrix[currentRow][COLS - 1]) {
            //use binary search again
            let l = 0;
            let r = matrix[currentRow].length - 1;

            while(l <= r) { //this will break if l and r move past one another

                const m = Math.floor((l + r) / 2);
                if (target > matrix[currentRow][m]) {
                    l = m + 1
                } else if (target < matrix[currentRow][m]) {
                    r = m - 1
                } else {
                    return true //if the m == target
                }
            }
        return false 

        } else if (target > matrix[currentRow][COLS - 1]) {
            topRow = currentRow + 1;
        } else if (target < matrix[currentRow][0]) {
            bottomRow = currentRow - 1;
        } else {
            break;
        }
    }

    return false //return false if the value is outside of what we see on the endpoints of rows
    
};
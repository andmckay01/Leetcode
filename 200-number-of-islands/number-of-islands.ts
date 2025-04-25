function numIslands(grid: string[][]): number {

    /*
    going to use breadth first search
    use a queue in the bfs algorithm to determine we need to continue running the algorithm (while things in the queue)
    use dynamic variable islands to track that
    as we iterate through the grid we mark "1" as "0" after we visit them

    */

    let islands = 0;
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];

    function bfs(r, c): void {
        let q = new Queue();
        q.push([r, c]); //push to queue
        grid[r][c] = "0"; //mark grid as visited

        //this is our loop
        /*
        things to do:
        1. add to queue
        2. mark things as visited and remove from queue
        3. use directions to search in all directions, make sure we have a check to ensure these directions are in bounds
        4. condition to check if another number is 1 and add to the queue and mark as visited
        */

        while(!q.isEmpty()) {
            const [row, col] = q.pop() as [number, number]; //pull values from end of queue
            for (const [dr, dc] of directions) { //this will loop through all 4 options and get the values to add
                //new row and column
                let newR = row + dr;
                let newC = col + dc;

                //check if in bounds and equals 1
                if ( newR >= 0 && newR < rows &&
                     newC >= 0 && newC < cols &&
                     grid[newR][newC] == "1") {
                        q.push([newR, newC]);
                        grid[newR][newC] = "0";
                     }
            }
        }
    }

    //iterate through rows and columns while using our bfs 
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] == "1") {
                bfs(r, c);
                islands++;
            }
        }
    }

    return islands;
    
};
function lastStoneWeight(stones: number[]): number {

    /*
    run the simulation
    need a way to get the top 2 stones for each iteration, max Heap
    bucket sort would be even more efficient but we'll do that later
    */

    let maxHeap: MaxPriorityQueue<number> = new MaxPriorityQueue();

    /*
    enqueue
    dequeue
    front will be max in this case
    last
    size
    */

    //add everything to the heap (n)
    for (const s of stones) {
        maxHeap.enqueue(s);
    }

    //run the simulation
    while (maxHeap.size() > 1) {

        //remove the top 2 and use them as variables
        const stone1 = maxHeap.dequeue(); //from the front
        const stone2 = maxHeap.dequeue(); //from the front

        //run the simulation
        if (stone1 == stone2) {
            continue
        } else if (stone1 > stone2) { //add difference as new stone
            const newStone = stone1 - stone2;
            maxHeap.enqueue(newStone);
        } else if (stone2 > stone1) { //add difference as new stone
            const newStone = stone2 - stone1;
            maxHeap.enqueue(newStone);
        }
    }

    //if there is one left then we return the value of that, if not we return 0
    if(maxHeap.size() == 1) {
        return maxHeap.front();
    } else {
        return 0;
    }
    
};
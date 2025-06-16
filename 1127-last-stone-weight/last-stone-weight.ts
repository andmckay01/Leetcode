function lastStoneWeight(stones: number[]): number {

    /*
    we need to add everything to a maxHeap
    */

    let maxHeap: MaxPriorityQueue<number> = new MaxPriorityQueue()

    //add all stones to the heap
    for (const s of stones) {
        maxHeap.enqueue(s);
    }

    //run the simulation
    while(maxHeap.size() > 1) {
        let stone1 = maxHeap.dequeue();
        let stone2 = maxHeap.dequeue();

        if (stone1 > stone2) {
            let newStone = stone1 - stone2;
            maxHeap.enqueue(newStone);
        } else if (stone1 < stone2) {
            let newStone = stone2 - stone1;
            maxHeap.enqueue(newStone);
        } //else both are destroyed, so they are not added back to the heap
    }

    if (maxHeap.isEmpty()) {
        return 0;
    } else {
        return maxHeap.dequeue();
    }
    
};
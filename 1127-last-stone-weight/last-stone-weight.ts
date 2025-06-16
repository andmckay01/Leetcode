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

        let newStone = stone1 - stone2;

        if (newStone > 0) {
            maxHeap.enqueue(newStone);
        }
    }

    if (maxHeap.isEmpty()) {
        return 0;
    } else {
        return maxHeap.dequeue();
    }
    
};
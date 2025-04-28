function lastStoneWeight(stones: number[]): number {

    /*
    enqueue
    dequeue
    size
    front
    */

    let maxHeap: MaxPriorityQueue<number> = new MaxPriorityQueue();

    //add stones to max heap
    for (const s of stones) {
        maxHeap.enqueue(s);
    }

    while (maxHeap.size() > 1) {

        let stone1 = maxHeap.dequeue(); //largest
        let stone2 = maxHeap.dequeue(); //second largest

        let newStone = stone1 - stone2;

        if (newStone > 0) {
            maxHeap.enqueue(newStone);
        }
    }

    if (maxHeap.size() == 1) {
        return maxHeap.front()
    } else {
        return 0
    }
        
    
};
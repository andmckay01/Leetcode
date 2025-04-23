class KthLargest {
    minHeap: MinPriorityQueue<number>;
    k: number;

    constructor(k: number, nums: number[]) {
        this.minHeap = new MinPriorityQueue();
        this.k = k;

        //create the heap in the constructor
        for(const num of nums) {
            this.minHeap.enqueue(num);
        }

        //ensure heap is the right size
        while(this.minHeap.size() > k) {
            this.minHeap.dequeue();
        }
    }

    add(val: number): number {

        //add to heap
        this.minHeap.enqueue(val);

        //ensure heap is right size
        if(this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }

        return this.minHeap.front(); //this will return only the minimum value   
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

 /*
enqueue
dequeue
size
front (min)
 */
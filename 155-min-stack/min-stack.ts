class MinStack {
    private stack: number[];
    private minStack: number[];
    
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        //add value to the normal stack
        this.stack.push(val);

        //minimum of value and the top of the stack
        let minCalc = val;
        if(this.minStack.length > 0) {
            minCalc = Math.min(this.minStack[this.minStack.length - 1], val);
        }
        this.minStack.push(minCalc);
        
    }

    pop(): void {
        this.stack.pop();
        this.minStack.pop();
        
    }

    top(): number {
        return this.stack[this.stack.length-1] //what is the top of the stack
        
    }

    getMin(): number {
        return this.minStack[this.minStack.length-1]
        
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
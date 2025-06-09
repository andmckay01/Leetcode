function isValid(s: string): boolean {

    /*
    need to use a queue
    need a mapping object openToClose that we use if it is true
    */

    //if closing we check the stack for an open in the correct position
    let closeToOpen = {")":"(", "}":"{", "]":"["};
    let stack = [];

    for(const c of s) {

        //if it's a close then we check the stack for the corresponding open
        if(closeToOpen[c]) {

            //remove from stack if it's there else we return false
            if (stack[stack.length - 1] == closeToOpen[c]) {
                stack.pop()
            } else {
                return false
            }
        
        //else we add to the stack
        } else {
            stack.push(c)
        }

    }

    //return true if stack is of length 0
    if (stack.length == 0) {
        return true;
    } else {
        return false;
    }

};
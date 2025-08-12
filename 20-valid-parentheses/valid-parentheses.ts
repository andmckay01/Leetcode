function isValid(s: string): boolean {

    /*
    Implement a stack
    Add to the stack if open, check if the correct one exists in the stack when closing
    Check for emptiness at the end
    */

    let stack = [];
    let closeToOpen = {"}": "{", "]": "[", ")": "("};

    for (const c of s) {
        if (closeToOpen[c]) {
            if (closeToOpen[c] != stack.pop()) {
                return false;
            }
        } else {
            stack.push(c);
        }
    }

    if (stack.length == 0) {
        return true;
    } else {
        return false;
    }

    
};
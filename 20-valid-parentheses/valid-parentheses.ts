function isValid(s: string): boolean {

    /*
    need to build a mapping object
    a stack implemented with an array
    if closing parenthesis, we check the top of the stock to close it
    if at the end the length of the stack is 0 then the parenthesis are valid
    */

    const closeToOpen = {")":"(", "}":"{", "]":"["};
    let stack = [];

    for (let p of s) {
        if (closeToOpen[p]) {
            let open = stack.pop();
            if (closeToOpen[p] !== open) {
                return false;
            }
        } else { //if open parenthesis
            stack.push(p);
        }
    }

    if (stack.length == 0) {
        return true;
    } else {
        return false;
    }

    
    
};
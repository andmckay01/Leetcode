function isValid(s: string): boolean {

    /*
    need to use a stack where we we add things to the stack when we see a closing
    if there is a closing must see an opening
    */

    let stack = [];
    let closeToOpen = {")" : "(", "}" : "{", "]" : "["}

    for(let c of s) { //c is character in string
        if(c in closeToOpen) { //if closing
            //if closing, there should already be an open
            //if stack is not empty and top of stack is the necessary opening parenthesis
            if(stack && stack[stack.length-1] == closeToOpen[c]) {
                stack.pop(); //remove character from the stack
            } else {
                return false;
            }
        } else {
            stack.push(c); //push open to the stack
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false
    }

};
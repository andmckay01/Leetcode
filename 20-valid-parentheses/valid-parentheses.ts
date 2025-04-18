function isValid(s: string): boolean {

    /*
    need a mapping object we use to determine what parenthesis is required
    use a stack to add things to the stack then remove them in the proper order

    1. loop through, add to stack if open
    2. if close, check if corresponding parenthesis exists and pop from stack
    3. if at any point the condition does not work, return false
    4. if at the end our stack is empty, return true
    */

    let closeToOpen = {")": "(", "]": "[", "}": "{"};
    let stack: string[] = [];

    for(let i=0; i<s.length; i++) {
        if(!closeToOpen[s[i]]) { //if opening parenthesis
            stack.push(s[i]);
        } else {
            //maps current closing to the open and checks if it exists at the end of stack
            if(closeToOpen[s[i]] == stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false
            }
        }
    }

    if(stack.length == 0) { //if we loop through everything and the stack is empty
        return true
    } else {
        return false
    }
    
};
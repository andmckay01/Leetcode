function isValid(s: string): boolean {

    /*
    order matters -> stack
    type matters -> dictionary (map)
    */

    let closeToOpen = {")": "(", "}": "{", "]": "["};
    let stack = [];

    for(let bracket of s) {
    
        if(!closeToOpen[bracket]) {
            stack.push(bracket);
        } else {
            if(closeToOpen[bracket] !== stack[stack.length - 1] || stack.length == 0) {
                return false
            } else {
                stack.pop();
            }
        }
    }

    if(stack.length == 0) {
        return true
    } else {
        return false
    }
    
};
function isValid(s: string): boolean {

    //need to use a stack, LIFO, we add to it and we remove from it
    //adding and removing from the end

    //hashMap of what parenthesis to expect
    let closeToOpen = {")" : "(", "}" : "{", "]" : "["}
    let stack = [];

    //use of for things that are not inherently iterable
    for(let c of s) { //closeToOpen(c) is checking that something is a closing
        console.log(c);
        if(stack && closeToOpen[c]) {
            console.log(stack[stack.length-1])
            if(stack[stack.length-1] == closeToOpen[c]) {
                stack.pop();
            } else {
                return false; //if the expected parenthesis was not found
            }
        } else {
            stack.push(c);
        }
    }

    if(stack.length == 0) return true

    return false
    
};
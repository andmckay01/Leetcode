function isValid(s: string): boolean {

    /*
    we need to use a stack to make sure parenthesis are in the right order
    We also need a mapping object to map close to open
    at the end, check if the array is empty
    stack is LIFO
    */

    let closeToOpen = {"}":"{", "]":"[", ")":"("};
    let stack = [];


    //for every character
    for (const p of s) {

        console.log(stack);
        console.log("p: ", p);

        //if closing
        if ( closeToOpen[p] ) {

            //if expected parenthesis is at the top of our stack
            if ( closeToOpen[p] == stack[stack.length - 1] ) {
                console.log(stack[stack.length - 1])
                stack.pop()
                console.log(stack[stack.length - 1])
                console.log(stack);

            } else {
                return false
            }
        } else {
            stack.push(p); //if opening, simply add to stack

        }
    }

    if ( stack.length == 0 ) {
        return true
    } else {
        return false
    }

};
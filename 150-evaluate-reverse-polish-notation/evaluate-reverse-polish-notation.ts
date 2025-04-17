function evalRPN(tokens: string[]): number {

    /*
    add numbers to the stack
    if a character comes up:
    1. run the operation on the numbers in the stack
    2. replace the result in the stack
    3. continue adding to stack until we find another operator and do it again on the previous 2 values

    truncate towards 0 is floor for greater than 0 and ceil for less than 0

    no divide by 0 operation (RPN is always valid)

    operators are applied to the previous 2 values (replace nums in stack with operation's value)

    */

    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => Math.trunc(a / b) // Integer division as per typical RPN requirements
    };

    let stack = [];

    console.log(tokens);

    for(let i=0; i<tokens.length; i++) {
        console.log(stack);
        if(isDigit(tokens[i])) {
            stack.push(+tokens[i]); //add to stack
            console.log(stack);
        } else {
            const b = +stack.pop();
            const a = +stack.pop();

            console.log("b: ", b);
            console.log("a: ", a);

            console.log(operations[tokens[i]]);

            //find the proper operations function and call it with our operands
            const result = operations[tokens[i]](a, b);

            //add result to the stack
            stack.push(result);

        }

    }

    return stack[0];
    
};

//return true if a number and false if a character
function isDigit(c: string): boolean {
    return !(c == "+" || c == "-" || c == "/" || c == "*")
}
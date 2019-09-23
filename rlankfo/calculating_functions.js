function zero(o) {
    let {stack} = handle(0, o);
    return stack.eval();
}

function one(o) {
    let {stack} = handle(1, o);
    return stack.eval();
}

function two(o) {
    let {stack} = handle(2, o);
    return stack.eval();
}

function three(o) {
    let {stack} = handle(3, o);
    return stack.eval();
}

function four(o) {
    let {stack} = handle(4, o);
    return stack.eval();
}

function five(o) {
    let {stack} = handle(5, o);
    return stack.eval();
}

function six(o) {
    let {stack} = handle(6, o);
    return stack.eval();
}

function seven(o) {
    let {stack} = handle(7, o);
    return stack.eval();
}

function eight(o) {
    let {stack} = handle(8, o);
    return stack.eval();
}

function nine(o) {
    let {stack} = handle(9, o);
    return stack.eval();
}

function plus(v) {
    let o = handle("+"+v);
    return o;
}

function minus(v) {
    let o = handle("-"+v);
    return o;
}

function times(v) {
    let o = handle("*"+v);
    return o;
}

function dividedBy(v) {
    let o = handle("/"+v);
    return o;
}

function handle(v, o={}) {
    let {stack} = o;
    if (!stack) {
        stack = new Stack();
        o.stack = stack;
    }
    stack.push(v);
    return o;
}

class Stack {
    constructor() {
        this.length = 0;
        this.items = [];
    }

    push(i) {
        this.items.push(i);
        this.length++;
    }

    pop() {
        if (this.items.length == 0)
            return new Error("empty stack");
        return this.items.pop();
    }

    string() {
        let s = "";
        for (let i = this.items.length - 1; i >= 0; i--) {
            s += this.items[i]+" ";
        }
        return s;
    }

    eval() {
        return Math.floor(eval(this.string()));
    }

}

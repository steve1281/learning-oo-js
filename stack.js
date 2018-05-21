console.log ("stack");

const _items = new WeakMap();

class Stack {
    constructor () {
        _items.set(this,[]);
    }

    pop() {
        if (this.count ==0) this.error();
        
        return _items.get(this).pop();
    }
    peek() {
        if (this.count ==0) this.error();
        return _items.get(this)[this.count-1];
    }
    push(value) {

        // if max of stack, then overflow, not impl.
        _items.get(this).push(value);
        
    }
    get count() {
        return _items.get(this).length;
    }
    error() {
        throw new Error("stack underflow");
    }
}
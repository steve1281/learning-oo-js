console.log("maps private");

const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
        _move.set(this, () => {
            console.log('move',this);
        });
    }

    draw() {
        console.log(_radius.get(this));
        _move.get(this)();
    }

    // getter
    get radius() {
        return _radius.get(this);
    }
    
    // setter
    set radius(value) {
        if (value <=0 ) throw new Error("invalid radius");
        _radius.set(this, value);
    }
}

const c = new Circle(1);


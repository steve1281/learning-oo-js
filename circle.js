const _radius = new WeakMap();

// note keyword export.
export class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }
    draw() {
        console.log('Circle with radius ' + this.radius);
    }

    get radius() { return _radius.get(this); }

}


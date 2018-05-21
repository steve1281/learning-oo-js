console.log('private symbols');

// abstraction using ES6 classes. 
// 1. use _ (so this._radius) and by convention, private.
// 2. use Symbols
// 3. use mapping?

const _radius = Symbol(); // a unique identifier
const _draw = Symbol();

class Circle {
    
    constructor(radius) {
        //this.radius = radius;
        //this['radius'] = radius;
        this[_radius] = radius;
    }
    [_draw]() {
        console.log("draw");
    }
}

const c = new Circle(1);

// no regular props
console.log(Object.getOwnPropertyNames(c));
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);
console.log(c[_radius]);

c[_draw](); 
c[_draw] = function() {console.log("nope");};
c[_draw]();


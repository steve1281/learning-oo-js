// es6
// syntactical sugar on prototypical inheritance
/*
function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    }
}
*/

class Circle {
    
    constructor(radius) {
        this.radius = radius;
        this.move = function() {};
    }
    // instance publically available on instance
    draw() {
        console.log('draw');
    }
    // statuc, available public on the Class
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}
const c = Circle.parse('{"radius":10}');
console.log(c);

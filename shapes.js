// shapes - Prototypical Inheritance
//

// intermediate function inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.console = Child;
}

// create a Shape object we csan inherit from
function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate Shape');
}

function Circle(radius, color) {
    Shape.call(this, color); // call parent
                                 
    this.radius = radius;  // the object this constructor generates will have a radius
}
extend(Circle, Shape);
Circle.prototype.duplicate = function() { //override, after extend
    // call parent, if you want
    //Shape.prototype.duplicate.call(this);

    console.log('duplicate Circle');
}
Circle.prototype.draw = function() {
    console.log('draw circle');
}

function Square(size, color) {
    Shape.call(this, color);
    this.size = size;
}
extend(Square, Shape);
Square.prototype.duplicate = function() { //override, after extend
    console.log('duplicate Square');
}

const shapes = [
    new Circle(1,"red"),
    new Square(10,"green")
];

for (let shape of shapes) {
    shape.duplicate();
}

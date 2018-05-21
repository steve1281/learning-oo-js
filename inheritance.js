console.log("inheritance");

class Shape {
    constructor(color) {
        this.color = color;
    }
    draw() {
        console.log("shape draw");
    }
    move() {
        console.log("move shape");    
    }
}

class Circle extends Shape {
    constructor(color, radius){
        super(color);
        this.radius = radius;
    }
    draw() {
        super.draw();
        console.log("circle draw");
    }
}

const c = new Circle("red", 1);


// prototypes
// note to self, every object shares a same prototype method
// so, if you put a method into a protype, it is accessible
// in every object, and only one copy exists of that method.

function Square(width, height) {
    // Instance members
    this.width = width;
    this.height = height;
    this.move = function() {
        console.log('move');
    }
}

// prototype members
Square.prototype.draw = function() {
    console.log("draw");
}

// override
Square.prototype.toString = function() {
    return 'Square with width '+ this.width + ' and height ' + this.height;
};

const c1 =  new Square(1,1);

//console.log(Object.keys(c1)); //instance
for (let key in c1) {
 //   console.log(key); //instance + proto
}
//console.log(c1.hasOwnProperty('width')); //true
//console.log(c1.hasOwnProperty('draw')); // false
//console.log(c1.__proto__.hasOwnProperty('draw')); // true




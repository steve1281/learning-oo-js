
function Circle(radius) {
    this.radius = radius;

    // private 
    let defaultLocation = {
        x: 0,
        y: 0
    };

    let computeOptimumLocation = function () {}
    
    this.draw = function () {
        computeOptimumLocation();
        console.log("draw");
    };

    // add a getter for defaultLocation
    this.getDefaultLocation=function() { return defaultLocation;}
    // OR..
    Object.defineProperty(this, 'defaultLocation', { 
        get: function() { 
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                 throw new Error("Invalid location value passed.");
            defaultLocation = value;
        }
    });
}

const circle = new Circle(1);
circle.defaultLocation = {x:1,y:1};
//circle.draw();
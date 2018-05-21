// stopwatch

function Stopwatch2() {

    let running = false; // local for running
    let startTime;
    let endTime; 
    let duration = 0; // local duration

    Object.defineProperties(this, {
        'running': { 
            get: function() {return running; },
            set: function(value) { running = value;}
        },
        'duration': { 
            get:function() {return duration; },
            set: function(value) { duration = value;}
        },
        'startTime': {
            get: function() {return startTime; },
            set: function(value) { startTime = value;}
            
        },
        'endTime': {
            get: function() {return endTime; },
            set: function(value) { startTime = value;}
        }
    });
}

Stopwatch2.prototype.start = function() { 
    if (this.running) 
        throw new Error("stopwatch is already running");
    this.running = true;
    this.startTime = new Date();
};

Stopwatch2.prototype.stop = function() {
    if (!this.running) 
        throw new Error("stopwatch is not running");
    this.running = false;
    this.endTime = new Date();
    this.duration = this.duration + (this.endTime - this.startTime)/1000;
};

Stopwatch2.prototype.reset = function() {
    this.duration = 0;
    this.startTime = null;
    this.endTime = null;
    this.running = false;
};

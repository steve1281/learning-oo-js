// stopwatch

function Stopwatch() {

    let running = false; // local for running
    let startTime;
    let endTime; 
    let duration = 0; // local duration

    // accessor for duration
    Object.defineProperty(this, 'duration', { 
        get: function() { 
            return duration;
        }
    });

    this.start = function() { 
        if (running) 
            throw new Error("stopwatch is already running");
        running = true;
        startTime = new Date();
    };

    this.stop = function() {
        if (!running) 
            throw new Error("stopwatch is not running");
        running = false;
        endTime = new Date();
        duration = duration + (endTime - startTime)/1000;
    };

    this.reset = function() {
        duration = 0;
        startTime = null;
        endTime = null;
        running = false;
    };
}
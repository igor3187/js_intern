class Timer {
    constructor(initialTime) {
        this.initialTime = this.toMs(initialTime);
        this.timerId = null;
    }

    start() {
        this.timerId = setInterval(() => {
            this.initialTime -= 1000;
            console.log('Seconds left: ' + this.toSeconds(this.initialTime));
            if (!this.toSeconds(this.initialTime)) {
                clearInterval(this.timerId);
                this.timeOver();
            }
        },1000)
    }

    stop() {
        clearInterval(this.timerId);
    }

    reset() {
        this.initialTime = 0;
    }

    addTime(time) {
        this.initialTime += this.toMs(time);
        console.log('Added time', (time * 1000), 'Total', this.initialTime)
    }

    subtractTime(time) {
        this.initialTime -= this.toMs(time);
        console.log('Removed time', time, 'Total', this.initialTime)
    }

    timeOver() {
        console.log("time over");
    }

    toSeconds(time) {
        return time / 1000;
    }

    toMs(time) {
        return time * 1000;
    }
}

let timer = new Timer(10);
console.log(timer.start());
setTimeout(() => {
    timer.stop();
    timer.addTime(2);
}, 4000);
setTimeout(() => {
    timer.start();
    timer.subtractTime(2);
}, 6000);

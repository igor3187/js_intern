class Watch {
    constructor() {
        this.interval = null;
    }

    start() {
        this.interval = setInterval(() => {
            console.clear();
            console.log(new Date);
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
        console.clear();
    }
}

const watch = new Watch();

watch.start();


setTimeout(() => {
    // Остановится через 10 секунд
    watch.stop();
}, 10000);

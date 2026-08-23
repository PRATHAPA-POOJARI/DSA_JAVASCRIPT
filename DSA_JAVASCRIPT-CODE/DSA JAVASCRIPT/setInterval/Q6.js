// Build a stopwatch.



let seconds = 0;
let timer;

function start() {
    timer = setInterval(() => {
        seconds++;
        console.log(seconds);
    }, 1000);
}

function stop() {
    clearInterval(timer);
}
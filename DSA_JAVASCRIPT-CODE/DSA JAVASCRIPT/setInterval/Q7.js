let count = 0;
let timer = null;

function start() {

    timer = setInterval(() => {
        count++;
        console.log(count);
    }, 1000);

}

function stop() {

    clearInterval(timer);

}

function reset() {

    clearInterval(timer);

    count = 0;

    console.log(count);
}





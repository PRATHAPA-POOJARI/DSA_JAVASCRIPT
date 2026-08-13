function countdown(num) {

    if (num === 0) {
        console.log("💥 Boom!");
        return;
    }

    console.log(num);

    setTimeout(() => {
        countdown(num - 1);
    }, 1000);
}

countdown(5);
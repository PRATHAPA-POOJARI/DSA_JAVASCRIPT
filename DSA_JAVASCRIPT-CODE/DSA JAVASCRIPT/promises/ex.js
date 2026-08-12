let pk = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("hao");
    }, 2000);

    setTimeout(() => {
        reject("no value");
    }, 3000);
});

pk.then(console.log).catch(console.error);
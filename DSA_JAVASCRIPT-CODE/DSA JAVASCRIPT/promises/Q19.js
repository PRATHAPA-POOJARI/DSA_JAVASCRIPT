// Write an async function that calls 3 Promises one after another using await 


let p1 = new Promise((resolve, reject) => {


    resolve(" hah hah  this is p1")



});

let p2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(" hah hah  this is p2")

    }, 4000)

});

let p3 = new Promise((resolve, reject) => {

    resolve("hah haha ahha  this p2")
});



async function final() {

    try {
        let p1Output = await p1;
        let p2Output = await p2;
        let p3Output = await p3;
        console.log(p1Output)
        console.log(p2Output)
        console.log(p3Output)
    }

    catch (err) {
        console.log(err)
    }
}


final()
// 1. Create a Promise manually

let pk  = new Promise((resolve,reject)=>{
    let result = true;
    if(result) {
        resolve('hai');

    }

    else {
        reject('not');
    }
});

 console.log(pk);


 // method 1
 pk.then((msg)=>{

    console.log(msg)
 })

// method 2
 async function getData(){
    let data  = await pk;
    console.log(data);
 }

 getData();



//  note :  👉 If resolve → value is stored in result
// 👉 If reject → error is thrown and caught in catch 


// “Promise runs → if resolve, await returns value to result → if reject, await throws error to catch.”

// Rewrite a .then() chain using async/await 


let pk  =  new  Promise((resolve)=>{

    let result = true ;

    if(result){
        resolve(" hai how are u")
    }

    else {
        resject("you dont worry ")
    }
})


// async function janu(){

    
//     try {
//     let  output =  await pk
//     console.log(output)
//     }
//     catch (err){
//    console.log(err)
//     }
// }
// janu()




// or 

const result = await pk;
console.log(result);




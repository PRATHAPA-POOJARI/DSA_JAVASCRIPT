// Write a function that returns a rejected Promise if a number is negative, else resolves with the number



// let pk = new Promise((resolve,reject)=>{
// let  result = true


// if(result>0){
//    resolve(" the number is positive")
// }
 
// else {

//     reject('the given number is  negative ')
// }
// });




// pk.then((msg)=>{
// console.log(msg)
// })

// .catch((err)=>{
//     console.log(err)
// })



function checkNumber(num){

    return new Promise((resolve,reject)=>{

        if(num<0){
            reject(" Number is negative ")
        }
        else {
            resolve("the number is positive")
        }
    })
}

checkNumber(3).
then((value)=>{
    console.log(value)
})
.catch((err)=>{
  console.log(err)

})
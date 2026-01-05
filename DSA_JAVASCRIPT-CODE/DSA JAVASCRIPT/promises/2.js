// const myPromise = new Promise((resolve, reject) => {
//   let sucess = true;
//   if (sucess) {
//     resolve("the task is successfully completed");
//   } else {
//     reject("the task is failed ");
//   }
// });

// // handling result

// async function handlePromise() {
//   try {
//     const result = await myPromise; // waits until resolved/rejected
//     console.log(result); // prints if resolved
//   } catch (error) {
//     console.log(error); // prints if rejected
//   }
// }

// handlePromise();

const myPromise = new Promise((resolve,reject)=>{
let result = false;

if(result){

  resolve(' prthap successfully added ')
}
else {
  reject('not okay prathap')
}
})

async function handlePromise (){
  try {
const result = await myPromise;
console.log(result)
  }
catch(err) {
console.log(err)
}
 
}
handlePromise();












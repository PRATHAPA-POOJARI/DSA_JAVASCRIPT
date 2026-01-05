//to check whether given no is prime or not

// let p = 1;
// let isPrime = true;

// for(let i =2;i<p;i++){
//     if(p % i){
//         isPrime = false;
//         break;
//     }
// }


// if(isPrime){
//     console.log(" the given value is Prime");

// }
// else {
//     console.log(" the given value is not prime")
// }

let pk = 5;
let isPrime = true;
for(let i = 2;i<pk;i++){
    if(pk % i ===0){
        isPrime =false;
        break;
    }
}

if(isPrime){
    console.log("given number is prime")
}
else {
  console.log('given number is not prime')
}


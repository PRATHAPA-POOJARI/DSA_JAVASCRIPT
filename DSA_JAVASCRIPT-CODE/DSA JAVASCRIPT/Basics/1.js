//to check whether given no is prime or not

let p = 1;
let isPrime = true;

for(let i =2;i<p;i++){
    if(p % i){
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log(" the given value is Prime");

}
else {
    console.log(" the given value is not prime")
}
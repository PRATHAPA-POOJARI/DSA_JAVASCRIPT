// Check if string is palindrome


let pk = "maja";

let reverse = "";

for(let i =pk.length-1;i>=0;i--){

    reverse = reverse+ pk[i]
}


if(pk === reverse){
    console.log("the given string is palindrome")
}
else {

    console.log('the given  string is  not palidrome')
}
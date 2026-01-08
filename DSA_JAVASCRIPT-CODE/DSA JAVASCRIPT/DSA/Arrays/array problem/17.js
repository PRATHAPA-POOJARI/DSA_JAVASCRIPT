// Count occurrences of a particular element

let arr = [2,3,3,22,22,22,22,2,2,22,4,4,4]
let target  = 2;
 let count = 0;

 for(let i = 0;i<arr.length;i++){

    if(arr[i]=== target){
        count++
    }
 }

 console.log(`the  element ${target} count Coccurance is ${count} `)
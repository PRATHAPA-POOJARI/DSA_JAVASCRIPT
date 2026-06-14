// // // Find the second largest element

// note   We don't know the numbers in the array.

// So we start with the smallest possible value (-Infinity).

// We use -Infinity because the array might contain negative numbers.

// If we start with 0


// let largest = 0;
// let secondLargest = 0;

// [-10, -20, -30]

// -10 > 0  false soo 


//   let   kp= function(arr) {
//    let  secondLargest = -Infinity;
//    let largest = -Infinity;
//    for (let i =0;i<arr.length;i++){
    
// if(arr[i]>largest){
//     secondLargest = largest;
//     largest = arr[i]
// }
// else if(arr[i]>secondLargest && arr[i] !== largest){
//     secondLargest = arr[i]
// }               
//    }
   
   
//    return secondLargest


//   }

//    let mk = kp([3,4,5,6,7,8,9]);

//    console.log(mk)













let kp = function(arr) { 
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for(let i =0;i<arr.length;i++){

        if(arr[i]>firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
      else if(arr[i]>secondLargest && arr[i] !== firstLargest){
        secondLargest = arr[i];
      }
    }

    return secondLargest;
}


let mk = kp([3,425,5,6,7,8,9]);

console.log(mk);
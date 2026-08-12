
// // Find the second largest element

// Method 1: Using Sorting

// let arr = [23,45,56,77,77,66,777,666,77777];
// let unique = [... new Set(arr)];
// // console.log(unique);
// unique.sort((a,b)=>a-b);
// console.log(unique);

// let secondLarge = unique[1];
// console.log(secondLarge)


// function secondLargest(arr) {
//   let first = -Infinity;
//   let second = -Infinity;

//   for (let num of arr) {
//     if (num > first) {
//       second = first;
//       first = num;
//     } else if (num > second && num !== first) {
//       second = num;
//     }
//   }

//   return second === -Infinity ? null : second;
// }

// // Example
// console.log(secondLargest([10, 5, 8, 20, 15])); // 15



let  pk =[2,3,4,5,3,21];
let first = -Infinity;
let  second = -Infinity;
for(let i =0;i<pk.length;i++){
if(pk[i]>first){
second = first;
first = pk[i]    
}
else if (pk[i]>second && pk[i]!==first)
           second =pk[i]
}

console.log(second);
console.log(first)
;



or 








// function largest(pk){

// let first = -Infinity;
// let second = -Infinity;

// for(let i =0;i<pk.length;i++){

//     if(pk[i]>first){
//         second = first;
//         first = pk[i]
//   }

// else if (pk[i]>second  && pk[i] !== first) {
//    second =pk[i]
// }
// }

// return  {first,second}
// ;
// }


// let mk = largest([2,4,5,4,33,2,4]);

// console.log("Largest:", mk.first);
// console.log("Second Largest:", mk.second)


// Use 0 only if you are 100% sure all numbers are 0 or positive.
// Use -Infinity when the array can contain any number (positive or negative). That's why it's the


// when arrray conatins -ve value that time 0 wont work use -Infinity because this is Smallest number  for comparing.
// Check if array contains duplicates

// let   arr  = [2,4,5,7,8,7];

// let remove =  new Set(arr);

// if(remove.size !== arr.length){
//   console.log('duplicate found')

// }









let   kp = [2,3,3,2,25,6,77];
let jp =  new Set(kp);

if(jp.size ==kp.length){
  console.log('duplicate found')
}
else {
  console.log(' no duplicate found')
}
console.log(jp)
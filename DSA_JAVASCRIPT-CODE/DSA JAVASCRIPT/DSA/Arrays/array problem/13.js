// Check if an array is sorted or not

// let sp = [2,1,5,6]
// let issorted = true;

// for(let i = 0;i<sp.length-1;i++){

//     if(sp[i]>sp[i+1]){
//         issorted =false;
//         break
//     }
// } 
// if (issorted) {
//   console.log("Array is sorted in ascending order");
// } else {
//   console.log("Array is NOT sorted");
// }














let sp = [2,3,4];

let   issorted = true;

for(i =0;i<sp.length-1;i++){

  if(sp[i]>sp[i+1]){

    issorted = false
    break
  }

}

if(issorted) {

  console.log('the given array is sorted')
}

else {

  console.log(' the  given array is not sorted')
}


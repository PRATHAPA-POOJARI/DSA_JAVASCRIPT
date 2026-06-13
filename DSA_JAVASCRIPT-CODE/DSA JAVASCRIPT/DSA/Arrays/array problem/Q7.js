// // Find the second largest element


  let   kp= function(arr) {
   let  secondLargest = -Infinity;
   let largest = -Infinity;
   for (let i =0;i<arr.length;i++){
    
if(arr[i]>largest){
    secondLargest = largest;
    largest = arr[i]
}
else if(arr[i]>secondLargest && arr[i] !== largest){
    secondLargest = arr[i]
}               
   }
   
   
   return secondLargest


  }

   let mk = kp([3,4,5,6,7,8,9]);

   console.log(mk)

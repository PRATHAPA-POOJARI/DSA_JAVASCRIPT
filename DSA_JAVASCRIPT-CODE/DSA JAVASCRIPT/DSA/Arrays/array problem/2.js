//find the largest element in the array

let array = [400,300,3,5,6666]
let largest = array[0]

for(let i =0;i<= array.length;i++){

    if(array[i]>largest){
        largest =array[i]
    }
}


console.log(`the largest element is ${largest}`)

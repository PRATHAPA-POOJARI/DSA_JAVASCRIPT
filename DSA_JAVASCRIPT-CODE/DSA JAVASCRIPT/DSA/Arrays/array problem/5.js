//Remove duplicates from an array

let array = [1, 2, 3, 4, 5, 1, 2, 3];
let uniqueArray = [];   
for(let i = 0; i < array.length; i++) {
    if(!uniqueArray.includes(array[i])) {
        uniqueArray.push(array[i]);
    }
}
console.log(`The unique elements in the array are: ${uniqueArray}`);
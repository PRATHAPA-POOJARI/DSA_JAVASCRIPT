// linear search

// Find the index of a target element (linear search)

let array = [3, 4, 5, 6, 33, 45];

let found = false;

target = 33;

for (let i = 0; i < array.length; i++) {
  if (array[i] === target) {
    found = true;
    console.log("found at index :", i);
  }
}
if(found){
    console.log('found ');
}
else {
    console.log('not found')
}
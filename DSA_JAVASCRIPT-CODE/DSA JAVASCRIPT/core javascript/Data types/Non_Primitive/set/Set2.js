const user = new Set();
   user.add('Prathap');
   user.add('Bangalore');
   user.add('Developer');
console.log(user);
// Set(3) { "Prathap", "Bangalore", "Developer" }



// Add duplicate  data

user.add('Prathap');
console.log(user);

// Duplicate  values are ignored 


// check the whether   the values are exist  or not 

console.log(user.has('Prathap')); // true
console.log(user.has('Python')); // false


// Delete   the  value 

user.delete('Bangalore');
console.log(user); // Set(2) { "Prathap", "Developer" }

console.log(user.has("Bengaluru"));

    // False



 // get the number of values in the set
 
 
console.log(user.size); // 2


//get the  all values  using for of loop

for(const value of user ){
    console.log(value);
}

// Prathapa
// Develop

//  Get all values using values()

console.log(user.values()); // SetIterator { "Prathap", "Developer" }
console.log([...user.values()]);
// ["Prathapa", "Developer"]


// Get all values using keys()

console.log(user.keys()); // SetIterator { "Prathap", "Developer" }
console.log([...user.keys()]);
// ["Prathapa", "Developer"]


//  Get entries
console.log(user.entries()); // SetIterator { ["Prathap", "Prathap"], ["Developer", "Developer"] }
console.log([...user.entries()]);
// [["Prathapa", "Prathapa"], ["Developer", "Developer"]]



// Remember: user.keys() gives you an iterator, while [...user.keys()] converts its values into an array.



// execute  a function  

user.forEach((value) => {     
    console.log(value);  
})


// Remove all values from  the Set

user.clear();
console.log(user); // Set(0) {}

console.log(user.size);
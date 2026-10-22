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


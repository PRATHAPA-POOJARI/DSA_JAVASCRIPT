
const user = new Map();

// 1. Add data
user.set("name", "Prathapa");
user.set("city", "Bengaluru");

// 2. Get data
console.log(user.get("name"));
// Prathapa

// 3. Check whether key exists
console.log(user.has("city"));
// true

// 4. Delete one entry
user.delete("city");

console.log(user.has("city"));
// false

// 5. Get the number of entries
console.log(user.size);
// 1

// 6. Remove everything
user.clear();

console.log(user.size);
// 0




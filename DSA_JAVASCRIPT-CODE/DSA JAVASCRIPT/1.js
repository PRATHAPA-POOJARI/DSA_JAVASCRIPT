// Define the class
class Person {
    // Define the constructor function to initialize properties
    constructor(name, age) {
      this.hai = name; // Assign the name property
      this.jan = age;   // Assign the age property
    }

    displayInfo () {
        console.log(`  id is ${this.hai} ${this.jan}`)
          };
    
  }
  
  // Create an instance of the class
  const p2 = new Person("prathap", 23);
  const p3 = new Person("januu", 23);
  p2.displayInfo();
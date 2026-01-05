// class Abc {
//     constructor(name ,age ){
//      this.p = name,
//      this.m = age
//     }
// }

// const pk = new Abc("ajsja","SQamka")
// console.log(pk.p);
// console.log(pk.m)

// class Prathap {
// constructor(name, year){
//     this.pk = name;
//     this.year = year;
// }
// displayInfo(){
// return  `car:${this.pk} year:${this.year}`
// }
// }

// const car1 = new Prathap(" BMW", 2020)
// const car2 = new Prathap(" audi", 2023)
// console.log(car1.displayInfo());
// console.log(car2.displayInfo());

class Prathap {
  constructor(name, year) {
    this.pk = name;
    this.year = year;
  }
  
display() {
 
    console.log(`hai man ${this.pk}`)
}
}

const car1 = new Prathap("BMW", 2020);



car1.display()

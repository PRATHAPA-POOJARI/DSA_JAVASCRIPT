
class Prathap  {
constructor(name,native,state,ph){
    this.name = name;
    this.native=native;
    this.state=state;
    this.ph =ph;
}

display() {
    console.log(`values:${this.name} ${this.native} ${this.state} ${this.ph}`);
}
}

const pk = new Prathap('raju','banglore','orissa',856626565);

pk.display();

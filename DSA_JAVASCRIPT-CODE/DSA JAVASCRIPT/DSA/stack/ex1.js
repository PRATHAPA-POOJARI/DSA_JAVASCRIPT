
class Prathap  {
    constructor(){
        this.property = []
    }
    push(element){
        this.property.push(element)
    }

    isEmpty(){
         return this.property.length ===0
    }

    pop(){
        if(this.isEmpty){
             return 'stack is empty'
        }
        return this.property.pop()
    }

}

const object = new Prathap();

 object.push(34)
 object.push(333)

 object.push(34)
 object.push(333)
 
 console.log(object.pop())
console.log(object.property)
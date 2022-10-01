class Person {
    constructor(firstName, lastName, age){
      this.firstName = firstName,
      this.lastName = lastName,
      this.age = age  
    }

// método para juntar first e last name
getFullName() {
    console.log (this.firstName + '' + this.lastName)
}}

const person = new Person('Flavio', 'Pereira', 52)
console.log(person)

console.log(person.getFullName())

// herança

class Animal {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(this.name  +  'latiu')
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}
const animal = new Animal("Simba")
animal.speak()

const dog = new Animal('Bob')
dog.speak()


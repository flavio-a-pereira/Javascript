class Person {
    constructor(firstName, lastName, age){
      this.firstName = firstName,
      this.lastName = lastName,
      this.age = age  
    }
}

const person = new Person('Flavio', 'Pereira', 52)
console.log(person)

class Person2 {
    constructor(firstName, lastName, age){
      this.firstName = firstName,
      this.lastName = lastName,
      this.age = age  
    }
    // método para juntar o primeiro e o último nomes
    getfullName(){
        console.log(this.firstName + ' ' + this.lastName)
    }
}
const person2 =new Person2('Joao', 'Silva', 30)
person2.getfullName()

// herança - dados de uma classe são herdados por outra

class Animal {
    constructor(name){
        this.name = name;
    }
speak(){
    console.log(this.name + ' ' + 'is cool!')
}
}
const animal = new Animal('Toto')
animal.speak()

class Dog extends Animal {
    constructor(name) {
    super(name); // o super 'chama' o constructor da classe Animal
    }
 speak(){
    console.log(this.name + ' '+ 'barked!')
 }   // este método sobrescreve o de cima
}
const dog = new Dog('Bob')
dog.speak()

const person= {
    firstName: 'Flavio',
    lastName: 'Pereira',
    age: "52",
    hobby: ['a', 'b', 'c']
}

//const firstName = person.firstName
//const lastName = person.lastName

//console.log(firstName)
//console.log(lastName)

console.log(person.hobby[2])

// destructuring
const {firstName, lastName, age, hobby} = person

console.log(firstName)
console.log(lastName)

person.dog = 'simba'

console.log(person)

const todos = [{
    id: 1,
    description: 'Estudar programação',
    isComplete: false,
},
{
    id: 2,
    description: 'Ler',
    isComplete: true, 
},
{
    id: 3,
    description: 'Treinar',
    isComplete: true,
}
]    

console.log(todos[2].description)

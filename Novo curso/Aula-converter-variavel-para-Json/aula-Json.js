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
}]

// tranferir codigo para API - a lista será transformada em string

const todosJSON = JSON.stringify(todos)
console.log(todosJSON)



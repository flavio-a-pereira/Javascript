function sum(a,b){
return a + b
}

const sumValue = sum(2,2)

console.log(sumValue)

 
function soma(a, b = 14) {
    return a + b
}

const somaValor = soma(2)

console.log(somaValor)

// arrow function
// defini-se a função associada a uma variável
const sumArrow = (a,b) => {
    return a + b
}

const sumArrowValue = sumArrow(10,15)
console.log(sumArrowValue)

// pode-se escrever também
//const sumArrow = (a,b) => a + b

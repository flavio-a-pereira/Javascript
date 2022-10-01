// passar o valor das propriedades para variaveis

var novoUsuario = {
    nome: 'Flavio',
    idade: 51,
    pais:'Brasil'
};

var {idade} = novoUsuario;
console.log(idade);

// extrair o valor de uma propriedade e armazenar em outra 

var {nome: primeiroNome} = novoUsuario;
console.log(primeiroNome);

// extrair o valor de uma propriedade em objetos aninhados

var novoUsuario2 = {
    nome: {
        primeiro: 'Augusto',
        ultimo: 'Pereira'
    }
};

var {nome:{primeiro}} = novoUsuario2;
console.log(primeiro);

// definindo valor default para uma propriedade

var novoUsuario3 = {
    nome: {
        primeiro: 'Joao',
        
    }
};

var {nome:{segundo = 'da Cruz'}} = novoUsuario3;
console.log(segundo);

// usar como parâmetro em uma função os valores das propriedades de um objeto

function imprimeUsuario({nome, idade, sexo}) {
    console.log(nome);
    console.log(idade);
    console.log(sexo);
}

var usuarioFunction = {
    nome:'Flavio Augusto',
    idade: 30,
    sexo: 'M'
};

imprimeUsuario(usuarioFunction);

// lista as propriedades do objeto

console.log(Object.keys(usuarioFunction));

console.log(Object.values(usuarioFunction));

//  para extrair os valores das propriedades com iteração

var props = Object.keys(usuarioFunction);
for (var i = 0; i < props.length ; i ++) {
    console.log(usuarioFunction[props[i]]);
}

// com iteração for of

for(var prop of props) {
    console.log('usuario',usuarioFunction[prop])
}

// com for in

for (var prop2 in usuarioFunction) {
    console.log(usuarioFunction[prop2]);
}

// para não listar propriedades herdadas

for(var prop3 in usuarioFunction) {
    if(usuarioFunction.hasOwnProperty(prop3)){
        console.log('prop3',usuarioFunction[prop3])
    }  
}
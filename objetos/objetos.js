var usuario = {
    nome: 'Flavio',
    idade: 26,
    youtube: 'nao',
    'ultimo-nome': 'Pereira'
}
console.log(usuario);

console.log(usuario.idade);
console.log(usuario.nome);
console.log(usuario.youtube);

console.log(usuario['ultimo-nome']);

usuario.ano = 2022
console.log(usuario);

delete usuario.idade;
console.log(usuario);

usuario.hobbies = ['um','dois','tres']
console.log(usuario);

usuario.competencias = {
    linguagens : ['Javascript', 'HTML5', 'CSS3']
}
console.log(usuario);

var usuario2 ={
    digaOi: function(name) {
        return `Olá ${name}`;
    }
};
// pode também criar a função como digaOi(name)
console.log(usuario2.digaOi('Flavio'));

var cor = 'preto'
var idade = 51
var usuario3 = {
    nome:'Flavio',
    cor,
    idade
}
console.log(usuario3);

// para juntar (merge) 2 objetos em um terceiro
var usuario4 ={
    nome: 'Jose',
    idade: 20
};

var entraInfo = {
    pais: 'Brasil',
    estado: 'SP'
};

var novoUsuario = Object.assign({}, usuario4, entraInfo);
console.log(novoUsuario);

//  outra forma de juntar 2 objetos

var novoUsuario2 = {
    ...usuario4,
    ...entraInfo
}
console.log(novoUsuario2);

// passar o valor da propriedade de forma dinamica

var nomeVariavel = 'Estado'
var usuario5 = {
    nome: 'Jose',
    [nomeVariavel]: 'RJ'
}

console.log(usuario5);

// getters e setters
// exemplo com uma array que possui um objeto por posição

var usuarios = [
    {
        nome:'Joao',
        idade:19
    },
    {
        nome: 'Maria',
        idade: 20
    },
    {
        nome: 'Carlos',
        idade: 21
    }
]
console.log(usuarios[0].nome);

// criar um objeto para navegar no array de usuarios

var consultUsuario = {
    posicao: 0, // a posição inicial é batizada de 0
    get atual(){ // atual é chamada como propriedade, e não com função. Para isso, usa-se o get. 
        return usuarios[this.posicao] // retorna o termo do array de usuarios na posição
    },
    set atual(posicao) {
        this.posicao = posicao; // força a propriedade assumir o valor dado no parametro. Usa-se o set
    },
    proximo(){ // a função soma 1 a posição de momento
        ++this.posicao; 
    },
    anterior() {
        --this.posicao; // a função decresce a posição de momento
    },

};

console.log(consultUsuario.atual); //{nome:'Joao',idade:19}

consultUsuario.proximo();
console.log(consultUsuario.atual); // {nome: 'Maria',idade: 20}

consultUsuario.proximo();
console.log(consultUsuario.atual); // {nome: 'Carlos',idade: 21}

consultUsuario.anterior();
console.log(consultUsuario.atual); // {nome: 'Maria',idade: 20}

consultUsuario.atual = 0;
console.log(consultUsuario.atual);//{nome:'Joao',idade:19}

consultUsuario.atual = 2; 
console.log(consultUsuario.atual);// {nome: 'Carlos',idade: 21}
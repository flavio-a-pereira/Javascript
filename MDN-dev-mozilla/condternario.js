let ligado = false
let senha = 'novo'
let msgLigado = ''
let msgSenha = ''

if(ligado) {
    msgLigado = 'Está ligado'
    msgSenha = (senha === 'novo') ? ('Está logado') : ('Não está logado')
}else {
    msgLigado = 'Está desligado'
}

console.log(msgLigado)
console.log(msgSenha)
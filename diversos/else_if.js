var porte = 2.1
var fat = 100000
var qporte = fat/porte
if (qporte <=30000) {
    var fator = 0.37
    var ajuste = 0
    var comissao = fator*fat
} else if (qporte <= 60000){
    var fator = 0.24
    var ajuste = 3900
    var comissao = (fator*fat) + (ajuste*porte)
} else{
    var fator = 0.2
    var ajuste = 6300
    var comissao = (fator*fat) + (ajuste*porte)
}
console.log(`O valor da comissão é R$ ${comissao}`)
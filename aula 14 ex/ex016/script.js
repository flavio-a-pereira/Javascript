function verificar () {
var txti = document.getElementById('in')
var txtf = document.getElementById('fim')
var txtp = document.getElementById('pas')


if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
    document.getElementById('msg').innerHTML = 'Impossivel contar'
} 
       
document.getElementById('msg').innerHTML = 'Contando:'

var i = Number(txti.value)
var f = Number(txtf.value)
var p = Number(txtp.value)
var text = ''
var emoji1 = String.fromCharCode(9994)
var emoji2 = String.fromCharCode(10004)
if (p <= 0) {
    window.alert('Passo invalido; vou considerar passo 1')
    p = 1
}

// contagem crescente
if (i < f) {
 for(var c = i; c<=f; c=c+p) {
    text += c + emoji1 // se declarar a variavel var res = document.getElementById('res') esta linha será substituida por: res.innerHTML += `${c} \u{1F449}`e não precisa criar a variável emoji1
   }
   // contegem regressiva
 } else if (i>f) { 
     for(var c = i; c>=f; c = c - p) {
         text += c + emoji1
     }
 }

 document.getElementById('res').innerHTML = text + emoji2
 
} 

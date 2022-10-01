let dia = new Date()
let dsem = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado']
console.log('Hoje é :' + dsem[dia.getDay()])
console.log('Hora atual :' + dia.getHours() + ':' + dia.getMinutes() + ':' + dia.getSeconds())
console.log(dia.getDate() + '-' + (dia.getMonth()+1) + '-' + dia.getFullYear())

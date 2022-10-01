function calcular() {
    var tfat = document.getElementById('fat')
    var fat = Number(tfat.value)
    var res = document.getElementById('res')
    var tipo = document.getElementsByName('tipo')

    if (tipo[0].checked) {
        if (fat <= 10000) {
            res.innerHTML ='Comissão de 10 %'
        } else if (fat <=50000) {
            res.innerHTML = 'Comissão de 7%'
        } else {
            res.innerHTML= 'Comissão de 4%'
        } 
    }else if (tipo[1].checked) {
        if (fat <= 10000){
            res.innerHTML = 'Comissão de 15%'
        } else if (fat <= 50000) {
            res.innerHTML = 'Comissão de 10%'
        } else {
            res.innerHTML = 'Comissão de 7%'
        }
    }
} 
function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        
        // criar elemento de imagem dinamicamente pelo JS com id
        var img =  document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'homem-jovem.png')  
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem.png') 
            } else {
                // idoso
                img.setAttribute('src', 'idoso.png')  
            }
        } else {
            genero = 'Mulher'
            
            if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src','menina.png')
            } else if(idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                // idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
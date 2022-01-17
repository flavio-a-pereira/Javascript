function verificar() {
var teste = document.getElementById('teste')
res = document.getElementById('res')


 if (teste.value !='Brasil') {
     window.alert('pare')
 } else if (teste.value = 'Brasil') {
    var img =  document.createElement('img')
    img.setAttribute('id', 'foto')
 } 
 img.setAttribute('src', 'menina.png')
 res.appendChild(img)
}

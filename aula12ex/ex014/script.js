function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`
if (hora >=0 && hora <12) {
    // Bom dia
    img.src = 'manhacirculo.jpg'
    document.body.style.background = '#c0d3d7'
} else if (hora >= 12 && hora <= 18) {
    // Boa tarde
    img.src = 'tardecirculo.jpg'
    document.body.style.background = '#a06a52'
} else {
    // Boa noite
    img.src = 'noitecirculo.jpg'
    document.body.style.background = '#142e49'
}
}

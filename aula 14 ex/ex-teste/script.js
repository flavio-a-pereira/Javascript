function atualizar() {
    var nom = document.getElementById('txt')
    var select = document.getElementById('sel')
   

    if (nom.value.length == 0) {
        window.alert('Digite um nome')
    } else {
        var nome = String(nom.value)
        var item = document.createElement('option')
        item.text = nome
        item.value = `${nom}`
        select.appendChild(item)
          
    } 

}
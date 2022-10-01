function verificar() {
    var txtnum = document.getElementById('txtnum')
    var select = document.getElementById('seltab')
    if (txtnum.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
    
    var num = Number(txtnum.value)
    var c = 1
    select.innerHTML = ''
    
    while (c <= 10) {
        let item = document.createElement('option') 
        item.text = `${num} x ${c} = ${num * c}`
        item.value = `select ${c}`
        select.appendChild(item)
        c++
    } 
    

    }
}
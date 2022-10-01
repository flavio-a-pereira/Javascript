function check() {
    var fab = document.getElementById('fab')
    var mod = document.getElementsByName('txtmod')
    var res = document.getElementById('res')


        if (fab.value != 'Audi' && fab.value != 'Mercedes') {
            window.alert('problema')
        } else  {       

         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         var tmod = ''

        if ((fab = 'Audi') && (mod[0].checked)){
            img.setAttribute('src','a5.png')
            tmod = 'A5'
        }else if ((fab = 'Audi') && (mod[1].checked)) {
            img.setAttribute('src','q5.png')
            tmod = 'Q5'
        } else if ((fab = 'Mercedes') && (mod[2].checked)) {
            img.setAttribute('src','classea.png')
            tmod = 'Classe A'
        } else if ((fab = 'Mercedes') && (mod[3].checked)) {
            img.setAttribute('src', 'classee.png')
            tmod = 'Classe E'
        } 
    }
   
    res.innerHTML = `Parabéns, voce escolheu um ${fab} modelo ${tmod}`
    res.appendChild(img) 
       
}
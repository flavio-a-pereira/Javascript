function mostra(n) {
    let itens = []
    for (let i = 2; i <= n; i++){
        if(primo(i)) {
            itens.push(i)
        }
    }

return itens
}

function primo(n) {
    
 for (let c = 2; c < n; c++) 
     if  (n%c === 0) {
     return false    
      }  
    return n > 1 
    }

    
console.log(mostra(13))


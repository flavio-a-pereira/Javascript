function primo(n) {
    let divisores  = 0
    
 for (let c = 1; c <= n; c++) {
     if  (n%c == 0) {
     divisores = divisores + 1     
      }  
     }

    if (divisores == 2) {
        return true
    } else {
        return false
    }
}
    console.log(primo(15))
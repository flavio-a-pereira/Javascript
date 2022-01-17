function maior(n1,n2,n3){
let itens = [n1,n2,n3]
        let maior = 0
        for (let i=0; i<itens.length;i++) {         
            if (itens[i] > maior) {
                 maior = itens[i]
            }
           
        }
        return maior

    }
console.log(maior(30,4,5))
        
        
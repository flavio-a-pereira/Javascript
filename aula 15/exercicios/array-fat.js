function click(n) {  
    let itens = []
    let fat = 1
    for (let i = n; i >= 1; i --) {
        itens.push(i)
        fat = fat * i
    }
    
    return '[' + itens + ']' +'  '+  fat
}
console.log(click(7))
function fatorial(n) {
    let fat
    if (n == 0) {
         fat = 0
    } else {
        fat = 1
        for (let i = 1; i<= n ; i ++) {
        fat = fat * i
        }
    }
    return fat
}

console.log(fatorial(5))


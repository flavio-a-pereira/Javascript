function findmax() {
    let max = - Infinity
    for (let i = 0; i < arguments.length; i ++) {
        if(arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max
}
console.log(findmax(1,23,45,11,90,78))

function sumall() {
    let sum = 0
    for (let j = 0; j < arguments.length; j ++) {
        sum += arguments[j]
    }
   return sum  
}

console.log(sumall(20,31,142))

function maximo(){
    let max = - Infinity
    for (var i = 1; i < arguments.length; i ++){
       if (arguments[i] > max) {
           max = arguments[i]
       }    
    }
    return max
}
console.log(maximo(6,5))

function maximo() {
    let max = - Infinity
    for (let i = 1; i < arguments.length; i ++){
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max
}

console.log(maximo(112,34,1456))

let x = [20,90,1]
console.log(x)
let y = x.reverse()
console.log(x)



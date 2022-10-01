let str = 'w3Resource'
let array =str.split('')
let text =''
    for(let i = array.length;i>0;i--){
        text += array.pop()
    }


console.log(text)
    
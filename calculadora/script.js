'use strict'

// captura o for escrito no display
let display = document.getElementById('display')

let buttons = Array.from(document.getElementsByClassName('button'))
let text = ''
buttons.map( button => {
     button.addEventListener('click', (e) => {
          display.innerText += e.target.innerText
          if(display.innerText != '+' || display.innerText != '÷' || display.innerText != '-' || display.innerText != 'x' ||){
               
          }
    }
     );
}
);

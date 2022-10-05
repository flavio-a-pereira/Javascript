// selecionar os itens do DOM, capturar o que é clicado
// Github de Matheus Battisti - https://github.com/matheusbattisti/js_calc/blob/main/js/scripts.js

const previousOperationText = document.querySelector('#previous-operation');
const currentOperationText = document.querySelector('#current-operation');
const buttons = document.querySelectorAll('#buttons-container button');

// construção de uma classe(objeto) calculator que vai ser acessado sempre

class Calculator {
    constructor(previousOperationText, currentOperationText) {
      this.previousOperationText = previousOperationText // é o que aparece na tela
      this.currentOperationText = currentOperationText  // é o que aparece na tela
      this.currentOperation ='' // no inicio o valor corrente que será digitado está zerado
    }

  // adicionar os números na calculadora através de um método addDigit
  addDigit(digit) {
    // checar se o currentoperation já tem um ponto e barra a digitação de um segundo ponto
    if(digit === '.' && this.currentOperationText.innerText.includes('.')){
        return;
    }
    this.currentOperation = digit; // altera a propriedade this.currentOperation para o valor clicado
    this.updateScreen();
  }
// método para a operação da calculadora
processOperation(operation) {
    //  checar se o operador current está vazio
    if(this.currentOperationText.innerText === '' && operation !== "C") {
       // se estiver, trocar a operação
        if(this.previousOperationText.innerText !== '') {
         this.changeOperation(operation);   
        }
        return
    }
    //  pegar os valores corrente e anterior
     let operationValue;
     const previous = +this.previousOperationText.innerText.split(" ")[0]; // converteu em número, separo e trago o número sem a operação
     const current = +this.currentOperationText.innerText // converteu em número
// switch para escolher e efetuar a operação escolhida
     switch(operation){
        case "+":
            operationValue = previous + current
            this.updateScreen(operationValue, operation, current, previous)
            break;
         case "-":
            operationValue = previous - current
            this.updateScreen(operationValue, operation, current, previous)
            break;
        case "/":
            operationValue = previous / current
            this.updateScreen(operationValue, operation, current, previous)
            break;
        case "*":
            operationValue = previous * current
            this.updateScreen(operationValue, operation, current, previous)
            break;
        case "DEL":
            this.processDelOperator();
            break;
        case "CE":
            this.processClearCurrentOperation();
            break;
        case "C":
            this.processClearOperation();
            break;
        case "=":
            this.processEqualOperator();
            break;
            default:
            return;
     }
}
  // métod para atualizar a tela da calculadora
  updateScreen(operationValue = null,operation=null,current=null,previous=null){
    
    if(operationValue === null) {
        this.currentOperationText.innerText += this.currentOperation; // os números são colocados dentro da div currentOperationText
    } else {
// checar se o valor é zero, se for adicionar o valor current
if(previous === 0){
    operationValue = current
}
// adicionar o valor current ao previous
this.previousOperationText.innerText = `${operationValue} ${operation}`;
this.currentOperationText.innerText = "";
    }
    
  }
 // método para trocar a operação matemática
changeOperation(operation){
   const mathOperations = ["*", "/", "+", "-"]
if(!mathOperations.includes(operation)){
    return
} 
this.previousOperationText.innerText=this.previousOperationText.innerText.slice(0,-1) + operation; // retira o ultimo caractere e concatena com a operação 

 }
// método para o DEL funcionar - deletar o último dígito
processDelOperator() {
this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0,-1);
}
// método para criar o CE - apagar o current operation
processClearCurrentOperation() {
    this.currentOperationText.innerText = "";
}
// método para criar o C - apaga previous e current operation
processClearOperation() {
this.currentOperationText.innerText = "";
this.previousOperationText.innerText = "";
}
// criação do método para o botão de igual
processEqualOperator(){
const operation = previousOperationText.innerText.split(" ")[1];
this.processOperation(operation);
}
  
}
// criação da instancia para o objeto calculator

const calc = new Calculator(previousOperationText, currentOperationText);



// método com forEach para receber o conteudo do texto do HTML do elemento buttons de cada botão, cada
// vez que ocorrer o evento "click".

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText;
       // conversão de texto em número com o operador(+)
       // if para saber se foi digitado número ou operação 
        if(+value >= 0 || value === '.'){
            calc.addDigit(value);// chama a instancia calc para rodar o método addDigit usando o valor clicado como parâmetro
        } else {
            calc.processOperation(value); //// chama a instancia calc para rodar o método processOperation usando a operação clicada como parâmetro
        }
    });
});
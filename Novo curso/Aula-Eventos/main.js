//Eventos - mudanças que ocorrem no html quando fazemos alguma ação
const submitButton = document.querySelector('#submit-button')

// Para criar um evento, usar o método addEventListener com dois parâmetros: 
//primeiro: o evento e segundo: o que vai acontecer

//submitButton.addEventListener('click', function(e) {
  //  e.preventDefault(); // previne o comportamento padrão do input do tipo submit que é mandar o formulario para outro local, e permite que aparece a mensagem abaixo quano o botão for clicado
    //console.log('Clicked')
//})

// capturar os dados dos inputs

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const myForm = document.querySelector('#my-form')

//submitButton.addEventListener('click', function(e) {
  //  e.preventDefault();
    //const nameValue = nameInput.value
    //const emailValue = emailInput.value
//if(nameValue === '' || emailValue === '') {
  //  return alert ('Preencha os campos!')
//}
//myForm.style.background = 'red'  
//})

// "escutando" o evento de mudança do valor de um input 

//nameInput.addEventListener('change', function(e) {
  //  console.log(e.target.value); // acessa o conteúdo do input quando ocorre a mudança
//});

// validação simples dos inputs de um formulário

const items = document.querySelector('.items')

submitButton.addEventListener('click', function(e) {
      e.preventDefault();
      const nameValue = nameInput.value
      const emailValue = emailInput.value
   if(nameValue === '' || emailValue === '') {
     return alert ('Preencha os campos!')
  }
  myForm.style.background = 'red'  
  items.firstElementChild.textContent = nameValue;
  items.children[1].textContent = emailValue
  })

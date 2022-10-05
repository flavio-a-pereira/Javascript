const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const submitButton = document.querySelector('#submit-button')
const errorMessage = document.querySelector('.msg')
const items = document.querySelector('.items')

submitButton.addEventListener("click", (e) => {
e.preventDefault();
const nameValue = nameInput.value;
const emailValue = emailInput.value;

if (nameValue === '' || emailValue === ''){
  errorMessage.textContent = 'Preencha os campos!';
  errorMessage.classList = 'error'; // trouxe um erro com a classe de erros do css 
  
  setTimeout(() => {
    errorMessage.textContent = '';
    errorMessage.classList = '';
  }, 2000); // set time out para limpar a mensagem de erro após 2 segundos
  return; // para sair da função
} 
const li = document.createElement('li')
li.classList = 'item';
li.innerHTML = 'Nome:' + ' ' + nameValue + 'Email:' + '  ' + emailValue

items.appendChild(li);

nameInput.value = '';// para limpar o campo apros preencher
emailInput.value = '';// para limpar o campo apros preencher
})

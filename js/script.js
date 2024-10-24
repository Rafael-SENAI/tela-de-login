const form = document.getElementById('form');
const email_input = document.getElementById('email-input');
const passowrd_input = document.getElementById('password-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) =>{
    alert(email_input.value);
    error_message.innerText = passowrd_input.value;
});
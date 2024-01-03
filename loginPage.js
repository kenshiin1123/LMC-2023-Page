const innerBox1 = document.querySelector('.innerBox1');
const innerBox2 = document.querySelector('.innerBox2');

const formOne = document.querySelector('#form-1');
const formTwo = document.querySelector('#form-2');

innerBox1.classList.toggle('innerBox1-radius')
formTwo.classList.toggle('formClose')

const toggleForm = () => {
    formTwo.classList.toggle('formClose');
    formOne.classList.toggle('formClose');
    innerBox2.classList.toggle('innerBox2-radius');
    innerBox1.classList.toggle('innerBox1-radius');
};

document.querySelector('#create-login').addEventListener('click', toggleForm);
document.querySelector('.createAccount').addEventListener('click', toggleForm);

const username = document.querySelector('#username');
const password = document.querySelector('#password');
const usernames = [];
const passwords = [];

formOne.addEventListener('submit', (e) => {
    e.preventDefault();

    let validCredentials = false;

    for (let i = 0; i < usernames.length; i++) {
        if (username.value === usernames[i] && password.value === passwords[i]) {
            validCredentials = true;
            break;
        }
    }

    if (validCredentials) {
        window.location.href = 'homepage.html';
        alert('Welcome!');
        formOne.reset();
    } else {
        alert('Incorrect Username or Password!');
        formOne.reset();
    }
});

// Create Account Form
const createUsername = document.querySelector('#create-username');
const createPassword = document.querySelector('#create-password');

formTwo.addEventListener('submit', (e) => {
    e.preventDefault();

    usernames.push(createUsername.value);
    passwords.push(createPassword.value);

    alert('New Account Created!');
    formTwo.reset();
});
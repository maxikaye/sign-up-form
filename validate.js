let passwordField = document.getElementById("password");
let passwordConfirmField = document.getElementById("password-confirm");
let userPassword, userPasswordConfirm;
const passwordError = document.querySelector(".error");

passwordField.addEventListener('input', e => {
    userPassword = e.target.value;
})

passwordConfirmField.addEventListener('input', e => {
    userPasswordConfirm = e.target.value;
    if (userPasswordConfirm !== userPassword) {
        passwordError.style.setProperty('visibility', 'visible');
    } else {
        passwordError.style.setProperty('visibility', 'hidden');
    }
})

// Inicio de sesion

const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit")

submit.addEventListener("click", function(e) {
    e.preventDefault();
    let empty = false;
    email.nextElementSibling.classList.remove('error-text');
    password.nextElementSibling.classList.remove('error-text');

    if ( email.value === "" ){
        empty = true;
        email.nextElementSibling.classList.add('error-text');
    }
    if ( password.value === "" ){
        empty = true;
        password.nextElementSibling.classList.add('error-text');
    }
    if( !empty ){
        console.log("Formulario enviado");
        alert(`Bienvenido ${email.value}`);
        email.value = "";
        password.value = "";
    }
});











//Registro
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("emails");
const password = document.getElementById("passwords");
const fechaNacimiento = document.getElementById("fechaNacimiento");
const pais = document.getElementById("pais");
const checkbox = document.getElementById("checkbox");
const submitR = document.getElementById("submitR")

submitR.addEventListener("click", function(e) {
    e.preventDefault();
    let empty = false;
    
    nombre.nextElementSibling.classList.remove('error-text');
    apellido.nextElementSibling.classList.remove('error-text');
    email.nextElementSibling.classList.remove('error-text');
    password.nextElementSibling.classList.remove('error-text');
    fechaNacimiento.nextElementSibling.classList.remove('error-text');
    pais.nextElementSibling.classList.remove('error-text');
    checkbox.nextElementSibling.classList.remove('error-text');
    
    if (nombre.value === "") {
        empty = true;
        nombre.nextElementSibling.classList.add('error-text');
    }

    if (apellido.value === "") {
        empty = true;
        apellido.nextElementSibling.classList.add('error-text');
    }

    if (email.value === "") {
        empty = true;
        email.nextElementSibling.classList.add('error-text');
    }

    if (password.value === "") {
        empty = true;
        password.nextElementSibling.classList.add('error-text');
    }

    if (fechaNacimiento.value === "") {
        empty = true;
        fechaNacimiento.nextElementSibling.classList.add('error-text');
    }

    if (pais.value === "") {
        empty = true;
        pais.nextElementSibling.classList.add('error-text');
    }

    if (!checkbox.checked) {
        empty = true;
        checkbox.nextElementSibling.nextElementSibling.classList.add('error-text');
    }

    if (!empty) {
        alert(`Registro exitoso!
            Bienvenido ${nombre.value}`);
        email.value = "";
        password.value = "";
        nombre.value = "";
        apellido.value = "";
        fechaNacimiento.value = "";
        pais.value = "";
        checkbox.checked = false;
    }
});
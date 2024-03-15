// Función para guardar datos de usuario en el almacenamiento session, se uso sessionStorage si no, sería muy complejo//
function saveUserData(username, email, password) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
}

// Función para verificar si los datos de inicio de sesión son válidos
function checkLogin(usernameOrEmail, password) {
    const storedUsername = sessionStorage.getItem('username');
    const storedEmail = sessionStorage.getItem('email');
    const storedPassword = sessionStorage.getItem('password');
    
    // se ocupan operadores logicos para esto
    return (usernameOrEmail === storedUsername || usernameOrEmail === storedEmail) && password === storedPassword;
}

// Función para redirigir a la página de inicio
function redirectToBlankPage() {
    window.location.href = "views/main.html"; // Me dirige a main
}

// funcuión para logearse
function login() {
    const usernameOrEmail = document.querySelector('#loginUsernameOrEmail').value;
    const password = document.querySelector('#loginPassword').value;

    if (usernameOrEmail.trim() === '' || password.trim() === '') {
        alert('Por favor, ingrese su nombre de usuario o correo electrónico y contraseña.');
        return;
    }

    if (checkLogin(usernameOrEmail, password)) {
        alert('¡Inicio de sesión exitoso!');
        redirectToBlankPage();
    } else {
        alert('¡Nombre de usuario o contraseña incorrectos!');
    }
}


// funcion para registrarse 
function register() {

    // Obtener los valores de los campos del formulario de registro
    const firstname = document.querySelector('#registerFirstname').value;
    const lastname = document.querySelector('#registerLastname').value;
    const email = document.querySelector('#registerEmail').value;
    const password = document.querySelector('#registerPassword').value;

    // Verificar si algún campo está vacío
    if (firstname.trim() === '' || lastname.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Por favor, complete todos los campos del formulario.');
        return;
    }

    // Verificar si el correo electrónico ya está registrado en el almacenamiento session
    const storedEmail = sessionStorage.getItem('email');
    if (storedEmail && storedEmail === email) {

    // Mostrar mensaje de alerta si el correo electrónico ya está registrado
        alert('¡El correo electrónico ya está registrado!');
        return;
    }

    // Guardar los datos del nuevo usuario en el almacenamiento session
    saveUserData(firstname + ' ' + lastname, email, password);
    
    // Mostrar mensaje de alerta de registro exitoso
    alert('Registro exitoso!');
}


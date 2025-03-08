// function login() {
//     let usuario = document.getElementById("Nombre").value;
//     let password = document.getElementById("Password").value;
//     let tipo = document.getElementById("Tipo").value;

//     if (usuario == "juan" && password == "12345" && tipo == "comprador") {
//         window.location = "BinaryShop.html";
//     } else {
//         document.querySelector('.error-message').style.display = 'block';
//     }
// }

// document.getElementById('button').addEventListener('click', login);

// const registrar = document.querySelector("#registrar");

// registrar.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const Nombre = document.querySelector("#Nombre").value;
//     const Apellido = document.querySelector("#Apellido").value;
//     const Email = document.querySelector("#Email").value;
//     const Nickname = document.querySelector("#Nickname").value;
//     const Password = document.querySelector("#Password").value;

//     const Users = JSON.parse(localStorage.getItem("users")) || [];
//     const isNombreRegistrar = Users.some(user => user.Email === Email);
//     if (isNombreRegistrar) {
//         return alert("El usuario ya está registrado");
//     }
//     Users.push({ Nombre, Apellido, Email, Nickname, Password });
//     localStorage.setItem("users", JSON.stringify(Users));
//     alert("Registro Exitoso");
//     window.location = "Login.html";
// });

function login() {
    let usuario = document.getElementById("Nombre").value;
    let password = document.getElementById("Password").value;
    let tipo = document.getElementById("Tipo").value;

    if (usuario == "juan" && password == "12345" && tipo == "comprador") {
        window.location = "BinaryShop.html";
    } else {
        document.querySelector('.error-message').style.display = 'block';
    }
}

document.getElementById('button').addEventListener('click', login);

const registrar = document.querySelector("#registrar");

registrar.addEventListener("submit", (e) => {
    e.preventDefault();
    const Nombre = document.querySelector("#Nombre").value;
    const Apellido = document.querySelector("#Apellido").value;
    const Email = document.querySelector("#Email").value;
    const Nickname = document.querySelector("#Nickname").value;
    const Password = document.querySelector("#Password").value;

    const Users = JSON.parse(localStorage.getItem("users")) || [];
    const isNombreRegistrar = Users.some(user => user.Email === Email);
    if (isNombreRegistrar) {
        return alert("El usuario ya está registrado");
    }
    Users.push({ Nombre, Apellido, Email, Nickname, Password });
    localStorage.setItem("users", JSON.stringify(Users));
    alert("Registro Exitoso");
    window.location,href = "Login.html";
});
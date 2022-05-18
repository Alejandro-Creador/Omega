function validarDatos (){
    var email = document.getElementById("emailLogin").value;
    if (email === "jose@gmail.com") {
        location.href = "loginPasword.html";
    } else {
        alert("Correo Electonico no Valido")
    }
}
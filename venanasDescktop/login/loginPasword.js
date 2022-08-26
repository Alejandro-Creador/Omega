function validarPassword (){
    var email = document.getElementById("passwordLogin").value;
    typeof(email)
    const pass = 123;
    if (email === pass) {
        location.href = "../ventanaPrincipalSecionInisiada/ventanaPrinsipalLogin.html";
    } else {
        alert("Correo Electonico no Valido")
    }
}
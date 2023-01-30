
var formulario = document.getElementById("formulario");
var controladorAlert = false;

recuperarDeLS();

//Una función que comprueba que al menos el 30% de los caracteres de la cadena no sean espacios
function comprobarEspacios(cadena) {

    var porcentaje = 0.0;
    var unidadMinima = 100 / cadena.length;

    for (var i = 0; i < cadena.length; i++) {

        if (cadena.charAt(i) == " ") {

            porcentaje += unidadMinima;

        }

    }

    if (porcentaje >= 70) {

        return true;

    } else {

        return false;

    }

}

formulario.addEventListener("submit", function (e) {

    var textoAlert = "Tienes que rellenar los siguientes campos: \n\n";

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("correo").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    guardarEnLS();

    if (nombre == "" || nombre == null || nombre.charAt(0) == " " || comprobarEspacios(nombre)) {

        textoAlert += "Nombre \n";

        controladorAlert = true;

    }

    if (email == "") {

        textoAlert += "Email \n";

        controladorAlert = true;

    }

    if (asunto == "") {

        textoAlert += "Asunto \n";

        controladorAlert = true;

    }

    if (mensaje == "") {

        textoAlert += "Mensaje \n";

        controladorAlert = true;

    }

    if (controladorAlert) {

        alert(textoAlert);

        textoAlert = "";

        return false;

    }

});

function guardarEnLS() {

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("correo").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("asunto", asunto);
    localStorage.setItem("mensaje", mensaje);
}

function recuperarDeLS() {

    var nombre = localStorage.getItem("nombre");
    var email = localStorage.getItem("email");
    var asunto = localStorage.getItem("asunto");
    var mensaje = localStorage.getItem("mensaje");

    console.log("Nombre: " + nombre);
    console.log("Email: " + email);
    console.log("Asunto: " + asunto);
    console.log("Mensaje: " + mensaje);
}
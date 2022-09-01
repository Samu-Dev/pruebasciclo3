// Los eventos se colocan en las etiquetas de los elements html
const user = "SamuelCo";
const pw = "1234";
function verificar() {
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    if (usuario == user && clave == pw) {
        alert("Login exitoso");
    }else{
        alert("Revise los datos ingresados");
    }
}
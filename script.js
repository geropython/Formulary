const SubmitFunction = (event) =>{
    event.PreventDefault()//evitar actualizacion de la web
    ValidarFormulario()
}

document.getElementById("formulario").addEventListener("submit", SubmitFunction)//escucha el envio de formulario

function ValidarFormulario(){
    let campoTexto = document.querySelectorAll("input[type=text]");
    let validacionCorrecta = true;

    campoTexto.forEach(campo=>{
        let errorCampo = document.getElementById("error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))//primera letra en Mayuscula y el resto normal
        if(campo.value.length == ""){//si el valor esta vacio
            MostrarError(errorCampo, "Este campo es requerido!");
            validacionCorrecta = false;
        }else if(campo.value.length > 0 && campo.value.length < 3){
            MostrarError(errorCampo, "Este campo debe tener al menos 3 caracteres!");
            validacionCorrecta = false;
        }else{
            OcultarError(errorCampo);
        }
    })
}

const MostrarError = (elemento, mensaje) =>{
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const OcultarError = (elemento, mensaje) =>{
    elemento.textContent = mensaje;
    elemento.style.display = "none";
}
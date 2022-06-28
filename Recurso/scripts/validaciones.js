//AL INICIAR GATILLARA Esto
$( document ).ready(function() {
    obtenerDatos()
});

function llamarMensaje() {
    alert("HOLA MUNDO")
}
function obtenerDatos() {
    $.ajax('https://62aa6b2a371180affbd50939.mockapi.io/Tabla', {
        type: 'GET',  // http method
        success: function (data, status, xhr) {
            for (var indice = 0; indice < data.length; indice++) {
                var fecha = data[indice].fecha
                var nombre = data[indice].nombre
                var Santiago = data[indice].Santiago
                var foto = data[indice].foto
                var filaTAbla = '<tr>'
                                + '<td class="prc-25">'+fecha+'</td>'
                                +  '<td class="prc-25">'+nombre+'</td>'
                                +   '<td class="prc-25">'+Santiago+'</td>'
                                +   '<td class="prc-25"><img src="'+foto+'" alt="" style="width: 131px"></td>'
                                '</tr>'
                console.log(filaTAbla)
                $("#tabla-adopt").append(filaTAbla)

            }
        },
        error: function (jqXhr, textStatus, errorMessage) {
            alert("No me pude conectar a la api: error"+errorMessage+" estado:"+textStatus  )
        }
    });
}
function sumar(numero1, numero2) {
    resultado = numero1 + numero2
    alert("El resultado es: " + resultado)
}

function validarDatos() {
    nombre= document.getElementById("nombre").value
    apellido= document.getElementById("apellido").value
    edad= parseInt (document.getElementById("edad").value)
    direccion= document.getElementById("direccion").value
    mensaje="nombre:"+nombre+"apellido:"+apellido+"edad:"+edad+"direccion:"+direccion
    errores=0
    if(nombre.length<3){
        document.getElementById("errorNombre").style.display="block"
        errores++
    } 
    else{
        document.getElementById("errorNombre").style.display="none"
    }  
    if(edad<18){
        document.getElementById("errorEdad").style.display="block"
        errores++
    } 
    else{
        document.getElementById("errorEdad").style.display="none"
    }  
    if(errores>0){
        document.getElementById("box-send").append("Uno de los campos es invalido")
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Uno o mas campos son invalidos: '+errores,
        footer: '<a href="">Why do I have this issue?</a>'
        })
        return false
    }
    else{
        return true
    }
  
}
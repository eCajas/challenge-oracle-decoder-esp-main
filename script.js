
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

var botonCopiar = document.querySelector("#btn-copy");
var fraseResultado = document.querySelector("#mensaje");

/** Boton Copiar */
botonCopiar.addEventListener("click", function (event) {

    event.preventDefault();
    fraseResultado.select();
    document.execCommand("copy");

});

/**Boton Encriptar */
var botonEncriptar = document.querySelector("#btn-encriptar")

botonEncriptar.addEventListener("click", function (event) {

    event.preventDefault();
    var form = document.querySelector("#form-texto");
    var frase = form.texto.value;
    var arr = frase.split("");
    var fraseEncriptada = "";
    var esMayuscula=false;

    console.log(arr);

    for (var i = 0; i < arr.length; i++) {
        //verifica si el mensaje contiene letra mayuscula o caracter 
        if (/[A-Z]/.test(arr[i]) || /[^A-Za-z0-9_]/.test(arr[i])) {
            alert("solo se permiten letras minusculas, no caracteres especiales ni mayusculas!!!");
            esMayuscula=true;            
            break;
        }

        if (arr[i] == "a") {
            arr[i] = "ai"
        }
        if (arr[i] == "e") {
            arr[i] = "enter"
        }
        if (arr[i] == "i") {
            arr[i] = "imes"
        }
        if (arr[i] == "o") {
            arr[i] = "ober"
        }
        if (arr[i] == "u") {
            arr[i] = "ufat"
        }
        fraseEncriptada = fraseEncriptada + arr[i];
    }

    if(esMayuscula){
        fraseResultado.value="";
    }else{
        form.texto.value = "";
        console.log(fraseEncriptada);
        fraseResultado.value = fraseEncriptada;
    }
});

/**Boton desencriptar*/
var botonDesencriptar = document.querySelector("#btn-desencriptar")

botonDesencriptar.addEventListener("click", function (event) {

    event.preventDefault();
    var form = document.querySelector("#form-texto");
    var frase = form.texto.value;

    var fraseDesencriptada = frase;

    for (var j = 0; j < fraseDesencriptada.length; j++) {

        if (fraseDesencriptada.indexOf("enter") >= 0) {
            fraseDesencriptada = fraseDesencriptada.replace("enter", "e"); //felimescimesdaidenters
        }
        if (fraseDesencriptada.indexOf("imes") >= 0) {
            fraseDesencriptada = fraseDesencriptada.replace("imes", "i");//felicidaidenters
        }
        if (fraseDesencriptada.indexOf("ai") >= 0) {
            fraseDesencriptada = fraseDesencriptada.replace("ai", "a");//felicidadenters
        }
        if (fraseDesencriptada.indexOf("ober") >= 0) {
            fraseDesencriptada = fraseDesencriptada.replace("ober", "o");//
        }
        if (fraseDesencriptada.indexOf("ufat") >= 0) {
            fraseDesencriptada = fraseDesencriptada.replace("ufat", "u");
        }
    }
    form.texto.value = "";
    fraseResultado.value = fraseDesencriptada;
});

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

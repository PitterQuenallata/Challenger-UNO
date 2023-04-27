//variables
var botonEncriptar=document.querySelector(".btn-encriptar");
var botonDesenriptar=document.querySelector(".btn-desencriptar");
var muñeco=document.querySelector(".cont-img");
var contenedor=document.querySelector(".text-incrip");
var resultado=document.querySelector(".text-result")
var mostrarBotonCopiar=document.querySelector(".btn-encriptar");


botonEncriptar.onclick = encriptarYMostrarBotonCopiar;
botonDesenriptar.onclick= desencriptar;

function mostrarCopiar() {
  var botonCopiar = document.getElementById("boton-copiar");
  botonCopiar.style.display = "block";
  console.log("holaok");
}

function encriptarYMostrarBotonCopiar() {
  encriptar();
  mostrarCopiar();

}




function encriptar(){
  ocultarAdelante();
  var cajaTexto = recuperarTexto()
  resultado.textContent=encriptarTexto(cajaTexto)
  
}

function desencriptar(){
  ocultarAdelante();
  var cajaTexto=recuperarTexto();
  resultado.textContent=desencriptarTexto(cajaTexto)
}

function recuperarTexto(){
  var cajaTexto=document.querySelector(".cajaTexto")
  return cajaTexto.value;
}

function ocultarAdelante(){
  muñeco.classList.add("ocultar");
  contenedor.classList.add("ocultar");
}


//incriptador
function encriptarTexto(mensaje){
  var texto =mensaje;
  var textoFinal="";
  for(var i=0; i<texto.length;i++){
    if(texto[i]=="a"){
      textoFinal=textoFinal+"ai"
    }else if(texto[i]=="e"){
      textoFinal=textoFinal+"enter"
    }else if(texto[i]=="i"){
      textoFinal=textoFinal+"imes"
    }
    else if(texto[i]=="o"){
      textoFinal=textoFinal+"ober"
    }
    else if(texto[i]=="u"){
      textoFinal=textoFinal+"ufat"
    }
    else{
      textoFinal=textoFinal+texto[i]
    }

  }
  return textoFinal;
}


//desencriptar
function desencriptarTexto(mensaje){
  var texto =mensaje;
  var textoFinal="";
  for(var i=0; i<texto.length;i++){
    if(texto[i]=="a"){
      textoFinal=textoFinal+"a"
      i=i+1;
    }else if(texto[i]=="e"){
      textoFinal=textoFinal+"e"
      i=i+4;
    }else if(texto[i]=="i"){
      textoFinal=textoFinal+"i"
      i=i+3;
    }
    else if(texto[i]=="o"){
      textoFinal=textoFinal+"o"
      i=i+3;
    }
    else if(texto[i]=="u"){
      textoFinal=textoFinal+"u"
      i=i+3;
    }
    else{
      textoFinal=textoFinal+texto[i]
    }

  }
  return textoFinal;
}


//Boton Copiar
//Boton Copiar
const btnCopiar=document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", () => {
  var contenido=document.querySelector(".text-result").textContent;
  navigator.clipboard.writeText(contenido);
  resultado.textContent = "";
  console.log("hola");
});




//agrandar texttarea

/* const textarea = document.querySelector('textarea');

textarea.addEventListener('input', () => {
  textarea.style.height = 'auto'; 
  textarea.style.height = `${textarea.scrollHeight}px`; 
}); */




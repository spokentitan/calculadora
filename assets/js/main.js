var valortotalinicial = "";
var valortotalsegundario = "";
var operacion = "";

function clearScreen(){
  debugger
  valortotalinicial = "";
  valortotalsegundario = "";
  document.getElementById("screen").innerText = "";
}

function sumar() {
  let resultado = parseInt(valortotalinicial) + parseInt(valortotalsegundario);
  document.getElementById("screen").innerText = resultado;  
  return resultado;
}

function restar() {
  let resultado = parseInt(valortotalinicial) - parseInt(valortotalsegundario);
  document.getElementById("screen").innerText = resultado;
  return resultado;
}

function multiplicar() {
  let resultado = parseInt(valortotalinicial) * parseInt(valortotalsegundario);
  document.getElementById("screen").innerText = resultado;
  return resultado;
}

function dividir() {
  let resultado = parseInt(valortotalinicial) / parseInt(valortotalsegundario);
  document.getElementById("screen").innerText = resultado;
  return resultado;
}

function concatenar(boton) {
  if (operacion !== "") {
    valortotalsegundario = valortotalsegundario + boton.id.toString();
    document.getElementById("screen").innerText += boton.id.toString();
  } else {
    valortotalinicial = valortotalinicial + boton.id.toString();
    document.getElementById("screen").innerText = valortotalinicial;
  }
}

function getOperacion(botonOperacion) {
  if(operacion !== ""){
    let resultado = resultadoOperacion();
    operacion = botonOperacion.innerText;
    document.getElementById("screen").innerText += operacion;
    valortotalsegundario = "";
    valortotalinicial = resultado.toString();
  }else{
    operacion = botonOperacion.innerText;
    document.getElementById("screen").innerText += operacion;
  }
  
}

function eliminar(){
    
   let cadenaEnTexto = document.getElementById("screen").innerText;
   let cadenaEnArreglo = Array.from(cadenaEnTexto);
   cadenaEnArreglo.pop();
   cadenaEnTexto = cadenaEnArreglo.join("");
   document.getElementById("screen").innerText = cadenaEnTexto;
}

function resultadoOperacion() {
  switch (operacion) {
    case "x":
      return multiplicar();
      
    case "-":
     return restar();
      
    case "/":
      return dividir();
      
    case "+":
      return sumar();
       
  }
}



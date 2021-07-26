var valortotalinicial = "";
var valortotalsegundario = "";
var operacion = "";

function clearScreen() {
  valortotalinicial = "";
  valortotalsegundario = "";
  operacion = "";
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
  
 
  if (valortotalinicial == "" && botonOperacion.innerText == "-") {
     concatenar(botonOperacion);
  } else {
    if (operacion !== "") {
      let resultado = resultadoOperacion();
      operacion = botonOperacion.innerText;
      document.getElementById("screen").innerText += operacion;
  
    } else if(valortotalinicial !== ""){
      operacion = botonOperacion.innerText;
      document.getElementById("screen").innerText += operacion; 
    }
  }
}

function eliminar() {
  let cadenaEnTexto = document.getElementById("screen").innerText;
  let cadenaEnArreglo = Array.from(cadenaEnTexto);
  cadenaEnArreglo.pop();
  cadenaEnTexto = cadenaEnArreglo.join("");
  document.getElementById("screen").innerText = cadenaEnTexto;

  if (valortotalsegundario !== "") {
    let arrayTemporalDeValorSegundario = Array.from(valortotalsegundario);
    arrayTemporalDeValorSegundario.pop();
    valortotalsegundario = arrayTemporalDeValorSegundario.join("");
  } else if (operacion !== "") {
    let arrayTemporalDeOperacion = Array.from(operacion);
    arrayTemporalDeOperacion.pop();
    operacion = arrayTemporalDeOperacion.join("");
  } else if (valortotalinicial !== "") {
    let arrayTemporalDeValorInicial = Array.from(valortotalinicial);
    arrayTemporalDeValorInicial.pop();
    valortotalinicial = arrayTemporalDeValorInicial.join("");
  }
}

function resultadoOperacion() {
  let valor = 0;
  
  switch (operacion) {
    case "x":
       valor = multiplicar();
      reorganizarVariables(valor);
      return valor;

    case "-":
       valor = restar();
      reorganizarVariables(valor);
      return valor;

    case "/":
       valor = dividir();
      reorganizarVariables(valor);
      return valor;

    case "+":
       valor = sumar();
      reorganizarVariables(valor);
      return valor;
  }
}

function reorganizarVariables(valor, ...operador) {
  valortotalsegundario = "";
  valortotalinicial = valor.toString();
  if (operador.join("") !== "") {
    operacion = operador.join("");
  } else {
    operacion = "";
  }
}

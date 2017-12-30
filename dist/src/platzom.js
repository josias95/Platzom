"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;

function platzom(str) {
  var palabra = str;
  //si la palabra es una palindromo, ninguna regla anterior cuenta
  //y se devuelve la misma palabra intercalando mayusculas y minusculas.
  var reverse = function reverse(str) {
    const rever = str.split("").reverse().join("");
    return rever;
  };

  function minMay(str) {
    var longitud = str.length;
    var palabra = "";
    var prueba = true;
    for (var i = 0; i < longitud; i++) {
      var char = str.charAt(i);
      palabra += prueba ? char.toUpperCase() : char.toLowerCase();
      prueba = !prueba;
    }
    return palabra;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }
  //si la palabra termina con ar, se le quita esos dos caracteres
  if (str.toLowerCase().endsWith("ar")) {
    palabra = str.slice(0, -2);
  }
  //Si la palabra inicia con Z se le añade pe al final
  if (str.toLowerCase().startsWith("z")) {
    palabra += "pe";
  }

  //si la palabra tiene 10 o mas letras, se debe partir a la mitad
  // y unir con un guion
  if (palabra.length >= 10) {
    let primeraMitad = palabra.slice(0, Math.round(palabra.length / 2));
    let segundaMitad = palabra.slice(Math.round(palabra.length / 2));
    palabra = primeraMitad + "-" + segundaMitad;
  }

  return palabra;
}
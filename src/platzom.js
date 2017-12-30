"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;

 function platzom(str){
 let palabra = str;
 //si la palabra es una palindromo, ninguna regla anterior cuenta
//y se devuelve la misma palabra intercalando mayusculas y minusculas.
const reverse = (str) =>{
	str.split("").reverse().join("");
	return str;
}

function minMay(str){
	const longitud = str.length;
	let palabra = "";
	let prueba = true;
	for (let i=0; i < longitud; i++) {
		const char = str.charAt(i);
		palabra += prueba ? char.toUpperCase() : char.toLowerCase();
		prueba = !prueba;
	}
	return palabra;
}

 if (str == reverse(str)) {
  return minMay(str);
  }
 //si la palabra termina con ar, se le quita esos dos caracteres
 if(str.toLowerCase().endsWith("ar")){
 	palabra = str.slice(0,-2);
 }
 //Si la palabra inicia con Z se le añade pe al final
  if (str.toLowerCase().startsWith("z")) {
  	palabra += "pe";
  }

 //si la palabra tiene 10 o mas letras, se debe partir a la mitad
 // y unir con un guion
 if(palabra.length >= 10){
 	primeraMitad = palabra.slice(0,Math.round((palabra.length)/2));
 	segundaMitad = palabra.slice(Math.round((palabra.length)/2));
 	palabra = primeraMitad + "-" + segundaMitad;
 }


  return palabra
}

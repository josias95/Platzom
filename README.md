#Platzom

Platzom es un idioma inventado para el [curso de Fundamentos de JavaScript](https://platzi.com/js), de Platzi.

##Descripcion del idioma

-si la palabra termina con ar, se le quita esos dos caracteres
-Si la palabra inicia con Z se le añade pe al final
-si la palabra tiene 10 o mas letras, se debe partir a la mitad y unir con un guion
-si la palabra es una palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas.

##Instalación
```
npm install platzom
```
##Uso
```
import platzom from  "Platzom"

console.log(platzom("programar"));
console.log(platzom("zorro"));
console.log(platzom("zarpar"));
console.log(platzom("abecedario"));
console.log(platzom("sometemos"));
```
##Créditos
- Josías Cubillos

##Licencia
[MIT](https://opensource.org/licenses/MIT)
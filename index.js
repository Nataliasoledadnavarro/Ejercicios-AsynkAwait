//Ejercitación
//Dado el siguiente código

const edad = 16
/*if (edad >= 18) {
  alert("Es mayor de edad!")
}*/
//Escribir el mismo código utilizando el operador de cortocircuito.

//edad >= 18 && alert("Tambien es mayor!")


/*Dado el siguiente código
const edad = 18
if (edad >= 18) {
  alert("Es mayor de edad!)
}
else {
  alert("es menor de edad!)
}
Escribir el mismo código utilizando el operador ternario.*/

edad >= 18 ? alert("Es mayor de edad") : alert("Es menor de edad!")


/*Dado el siguiente código
const sumar = (num1, num2) => {
  return num1 + num2
}
Reescribir la función utilizando el return implícito.*/

const sumar = (num1, num2) => num1 + num2
alert(sumar(5,2))

/*Usando filter, definí la función losMasCaros que tome una lista de costos que representan costos de diferentes productos y devuelva un nuevo array con los precios más caros (mayores a 50) --> (ya la hiciste en mumuki: https://mumuki.io/frontend.ada/exercises/11519-javascript-avanzado-metodos-de-arrays-los-mas-caros)
4.1. Reescribí la función para tener sólo return implícitos*/
const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]

const losMasCaros = costos => costos.filter(costo => costo > 50)
//console.log(losMasCaros(costos))

/*Reescribí los siguientes ejercicios de mumuki usando el operador de cortocurcuito o el operador ternario. Usá return implícito:
https://mumuki.io/frontend.ada/exercises/11153-introduccion-a-javascript-condicionales-puede-ver-pelicula*/

//Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

const puedeVerPelicula = (edad,tieneAutorizacion) => edad >= 15 || tieneAutorizacion

console.log(puedeVerPelicula(12,true))
console.log(puedeVerPelicula(11,false))
console.log(puedeVerPelicula(18,true))
console.log(puedeVerPelicula(19,false))

///https://mumuki.io/frontend.ada/exercises/11154-introduccion-a-javascript-condicionales-esta-en-rango

/*Definí una función estaEnRango que reciba como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)*/
const estaEnRango = (valor,minimo,maximo) => valor >= minimo && valor <= maximo

console.log(estaEnRango(5,4,8))
console.log(estaEnRango(15,4,8))
//https://mumuki.io/frontend.ada/exercises/11155-introduccion-a-javascript-condicionales-puede-avanzar


//https://mumuki.io/frontend.ada/exercises/11156-introduccion-a-javascript-condicionales-es-vocal
//https://mumuki.io/frontend.ada/exercises/11157-introduccion-a-javascript-condicionales-es-consonante*/
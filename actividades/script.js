/* Actividad 1
Defina dos variables: Nombre y edad
Imprimalas por consola */
console.log("Actividad 1")
var nombre1 = "Daniela"
var edad1 = 25

console.log(nombre1)
console.log(edad1)
console.log("")
/* Actividad 2
1. Defina dos variables globales: nombre y apellido.
2. Defina dos variables locales en un bloque: edad y comida.
3. Pruebe cambiando las variables por fuera y por dentro del bloque e imprimiendolas por consola.
4. Una vez entienda la diferencia entre let y var, responda la siguiente pregunta: 
    ¿En qué casos resulta mejor usar let o var para definir variables? */
console.log("Actividad 2")
var nombre2 = "Daniela"
var apellido2 = "Acero"
console.log("Variable nombre fuera del bloque", nombre2)
console.log("Variable apellido fuera del bloque", apellido2)
{
    let edad2 = 25
    let comida2 = "Pasta"
    nombre2 = "Dani"
    apellido2 = "steel"
    console.log("Variable nombre dentro del bloque", nombre2)
    console.log("Variable apellido dentro del bloque", apellido2)
    console.log("Variable edad dentro del bloque", edad2)
    console.log("Variable comida dentro del bloque", comida2)
}

console.log("Variable nombre fuera del bloque", nombre2)
console.log("Variable apellido fuera del bloque", apellido2)
// console.log("Variable edad fuera del bloque", edad2) ---- Error por no estar declarada
// console.log("Variable comida fuera del bloque", comida2) --- Error por no estar declarada
let edad2 = 22
let comida2= "pizza"
console.log("Variable edad fuera del bloque", edad2)
console.log("Variable comida fuera del bloque", comida2)
console.log("")

/*Actividad 3 
1. Defina tres constantes:
    1. El número de segundos en un minuto (60).
    2. El número de minutos en una hora (60).
    3. El número de horas en un día (24).
2. Utilizando el valor almacenado en las constantes que creo, imprima por consola el siguiente mensaje:
“Un minuto tiene 60 segundos, una hora tiene 60 minutos y un día tiene 24 horas” */
console.log("Actividad 3")
const segundos = 60
const minutos = 60
const horas= 24
console.log ("Un minuto tiene ", segundos, " segundos, una hora tiene ", minutos, "minutos y un día tiene ", horas, "horas." )
console.log(`Un minuto tiene ${segundos} segundos, una hora tiene ${minutos} minutos y un día tiene ${horas} horas`)

// let edad= prompt("Por favor ingresa tu nombre: ")
// console.log("hola" + ana +  ", bienvenido/a!")
// alert ("hola" + ana +  ", bienvenido/a!")
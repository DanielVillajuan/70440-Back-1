import moment from "moment"; // ESMODULES
const moment = require('moment') // COMMONJS
const toDay = moment()
console.log(toDay)
// generar un array con 10 numeros aleatorios del 0 al 20
// [2,2,1,20,15,15,1,1] 

// crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave 
//será la cantidad de veces que salió dicho número. Representar por consola los resultados
// consulta
const resultado = {
    "2": 2,
    "1": 3,
    "20":1,
    "15": 2
}

const arrayRandom = [2,2,1,20,15,15,1,1,31,31];

const calcularRepetidos = array => {
    return array.reduce((prev, numero)=> {
        return {
            ...prev,
            [numero]: prev[numero] + 1 || 1
        }
    },{})
}


console.log(calcularRepetidos(arrayRandom))

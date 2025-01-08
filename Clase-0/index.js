// Clase - 0

// console.log("Hola")


// let saludo = "HOLAAAAA"
// let saludoAux = saludo

// saludoAux = "Buenos dias"


const persona1 = {
    nombre: 'Pedrito'
}

const gemelo = {...persona1} // hace un copia por referencia


gemelo.nombre = 'Jose'

console.log(persona1) // { nombre: 'Jose'}

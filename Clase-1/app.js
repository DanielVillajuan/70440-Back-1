// const nombre = "carlos"
// const conjuntoNombre= ["",12,true]
// console.log(respuesta);
// const respuesta = 1 + "5"
// console.log(respuesta) //
// let counter = 0;

// console.log() // 
// ""
// true | false
// 100
// {}
// []

// counter = 1;
// console.log(counter) // 1
// console.log(saludo) // undefined
// var saludo = "Hola"


// function nombreFuncion(){
// }


// const funcionAnonima1 = function (){
// }

// const funcionArrow = () => {
//     // this
// }

// scope 


// const nombre = "Daniel";

// function saludar () {
//     const nombre = "Pedro";
//     console.log('Buenas ', nombre)
//     function despedir(){
//         console.log('Adios', nombre)
//     }
   

// }

// saludar();
// despedir();
// console.log('Adios ', nombre)

// VOLVEMOS A LAS 14hs
// const nombre  = "Pedro"
// console.log(`Hola ${nombre} buenas`)

// Closures

// const suma = (numeroA) => {
//     return (numeroB) => { return numeroA + numeroB}
// }

// suma -> fn

// const fnRetornada = suma(10) // -> fn
// const  respuesta = fnRetornada(20) // 30
// console.log(respuesta)

// class Persona {

//     constructor(nombre){
//        this.nombre = nombre
//     }

//     static saludar(){
//         console.log('Buenas ', this.nombre ?? 'Conocido')
//     }

//     hablar(){

//     }
// }

// class Fixure {
//     staticcalcularPartidos(){

//     }
// }

// Persona.saludar()

// const owner = null

// const ownerName = owner ?? "usuario" // nullish
// // console.log(ownerName)

// const persona = null

// console.log(persona?.domicilio?.CP ?? 'CP generico')

// function suma(b, a = 10) {
   
// }


// console.log(suma(10))


// VOLVEMOS y 10

class Contador {
    static contar = 0

    constructor(responsable){
        this.responsable = responsable
        this.contarIndividual = 1
        Contador.contar++
    }

    contar(){
        this.contarIndividual++
        Contador.contar++
    }

    getCuentaIndividual(){
        return this.contarIndividual
    }

    getCuentaGlobal(){
        return Contador.contar
    }

    getResponsable(){
        return this.responsable
    }
}

const contadorUno = new Contador('Dani')
const contadorDos = new Contador('Pedro')

console.log(contadorUno.getCuentaGlobal()) // 2
contadorUno.contar()
console.log(contadorDos.getCuentaGlobal()) // 3
console.log(contadorDos.getCuentaIndividual()) // 1
console.log(contadorUno.getCuentaIndividual()) // 2

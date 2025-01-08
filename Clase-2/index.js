console.log("Clase - 2")

// const resultado = 2**5

// console.log(resultado)

// // includes -> metodo de los arrays 

// const existe = ['Daniel', 'Pablo', 'Pedro'].includes('Daniel');
// // find no es igual o similar. 

// // array.some( elemento => elemento.id === 1)
// console.log(existe) // false

// ASYNC - AWAIT

// const altaUsuario = async (usuario) => {
//     // fetch guardando el usuario
//    const respuesta =  await fetch()
//     console.log(respuesta)
// }

// Object.keys, object.values y object.entries

// const persona = {
//     nombre : 'Daniel',
//     apellido: 'Villajuan',
//     edad: 29,
//     dni: 1111111
// }

// console.log(Object.keys(persona)) // ['nombre','apellido',¿....]
// console.log(Object.values(persona)) // ['Daniel','Villajuan',¿....]
// console.log(Object.entries(persona)) // [['nombre','Daniel'],['apellido','Villajuan'],[]]


// persona.sarasa = 'daskndlaskd' // si no existe me lo crea, se asigne un valor

// persona[nuevoAtributo] = otroResultado // si no existe me lo crea, se asigne un valor


// then, catch, finally

// rest y spread


// spread

// const persona = {
//     nombre : 'Daniel',
//     apellido: 'Villajuan',
//     edad: 29,
//     dni: 1111111,
//     cuil: 3432423
// }

// const persona2 = {
//     ...persona,
//     cuil: 999999,
// }
// console.log(persona)

// console.log(persona2)


// REST

// const { edad, dni, ...restPersona } = persona2
// const persona3 = {
//     //....,
//     edad: edad,
// }

// const persona4 = {
//     ...restPersona,
//     edad: 25
// }
// console.log(restPersona)

// const { edad, dni, ...restPersona } = persona2
// const persona3 = {
    // ...restPersona,
    // edad, // edad : edad
// }

// console.log(persona3)

// const sumar = (primerParametro,segundoParametro,  ...restNumero) => {
//     let total = 0;
//     restNumero.forEach(num => {
//         total+=num // total = total + num
//     })
//     return total
// }

// console.log(sumar(2,3,4,5,49,30334, 95))


// String.trim() // elimina los espacios de un string

// const saludo = "Holaaaa   s  "
// console.log(saludo.trim())


// const arrayAnidado = [1,2,3,4,[2,4,[5,6, [2,5]],2],5,68,9,10]

// console.log(arrayAnidado.flat(3))

// import sumar from '../suma'


// async function ejemploDynamic (){
//     if(user.isLog){
//        const { restar, sumar } = await import('./ejemplo.js') // import dinamico
        
//     }
// }



// // lineas de codigo


// operador nullish
// const golLocal = { gol: 2};

// const resultado = golLocal ?? { gol: 0 };

// console.log(resultado) // 0


// variables privadas

class Persona{
    #nombre
    constructor(){
    }

    getNombre(){
        return 'El valor es:' + this.#nombre;
    }

    setNombre(nuevoValor){
        this.#nombre = nuevoValor;
    }
}


const alumno = new Persona ('Daniel')

alumno.getNombre()

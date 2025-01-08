console.log('Clase - 3')


// function saludar(nombre, callback){
//     console.log('Hola ' + nombre)
//     const customName = 'Hola ' + nombre

//     callback(customName);
// }

// saludar('Daniel', (nombre) => {
//     console.log(nombre + ' buenas noches')
// })  


// Hacer una funcion que reciba un array y un callback simulando un mapping.

const customMap = (elementos, callback) => {
    const nuevoArray = [];
    for(let i=0;i<elementos.length; i++){
       const nuevoElemento = callback(elementos[i], i) // retornar un nuevo elemento
        nuevoArray.push(nuevoElemento)
    }

    return nuevoArray
}

// customMap([1,2,3,4,5,6,7,8,9,10], (elemento, indice) => {
//     console.log(elemento + " x " + (indice + 1) + " = " + elemento * (indice + 1)) //
// })


function saludar(){
    console.log('Hola como estas')
    return new Promise((resolve, reject) => {
        resolve()
    })
}

function despedirse(){
    console.log('Buenas noches')
    return new Promise((resolve, reject) => {
        resolve()
    })
}

function agradecer(){
    console.log('Muchas gracias')
    return new Promise((resolve, reject) => {
        resolve()
    })
}

function emocion(){
    console.log('Aprobe el curso de backend!!!')
    return new Promise((resolve, reject) => {
        
        // condiciones que ejecuten una u otra
    })
}

// saludar()
//  .then(despedirse)
//  .then(despedirse)
//  .then(agradecer)
//  .catch(() => {

//  })

// fetch('')
// .then()

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((data) =>{
//     console.log(data)
//     return data.json()
// })
// .then((data)=> {
//     console.log(data)
// })
// .then((data)=> {
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{

// })

// Sincronismo vs Asincronismo


// function saludar(){
//     console.log('Buenas noches')

// }


// function procesandoSaludo(){

//     saludar()

//     return 'Se termino el saludo'
// }


// procesandoSaludo()

// console.log('Inicio del proceso')

// setInterval(() => {
//     console.log("Hola soy el interval")
// }, 0)

// console.log('Fin del proceso')

//


fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((data) =>{
    console.log(data)


    return data.json()
})
.then((data)=> {
    console.log(data)


})
.catch((error)=>{
    console.log(error)
})


// no puedo ejecutar lo que devuelve el fetch

function fetchData(){
    
    return fetch('https://pokeapi.co/api/v2/pokemon/ditto')

}


 const mostrarData = async () => {
   const response =  await fetchData()
   
    
}


const mostrarUsuarios = async () => {
    // logica necesaria para traer datos o moldearlas
    try  {
        const listaDeAlumnos =  await fetchData()
        
        // elbloque que este dentro del try, lo va a validar de que no explote

    } catch(error){
        console.log(error)
        window.href = 'nueva url'

    }
    //
    //
}

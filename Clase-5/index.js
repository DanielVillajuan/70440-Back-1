
// console.log('Inicio del programa')
// setTimeout(()=>{
//     console.log("Soy el time out")
// },5000)
// console.log('Final del programa')


//Inicio
//Final
//Soy el time out

// let i = 0;

// let idInterval = setInterval(()=> {
//     console.log("Hola")
//     i++
//     if(i > 5){   
//         clearInterval(idInterval)
//     }
// }, 3000)

// clearInterval(idInterval)


import fs from 'node:fs' // ESMODULES
// console.log(fs)

// SINCRONICO
//fs.writeFileSync('./ejemplo.txt','Hola buenas noches mi gente!')
// const leyendoArchivo =  fs.readFileSync('./ejemplo.txt','utf-8')
// console.log(leyendoArchivo)

// console.log(fs.existsSync('./ejemplo.json'))

// fs.unlinkSync('./ejemplo.txt')

// CALLBACKS
// fs.writeFile('./ejemplo.txt',"Buenas noches pero con callbacks",'utf-8',(error) => {
//     if(error) {
//         console.log("Error al escribir o crear el archivo")
//     }
//     fs.readFile('./ejemplo.txt','utf-8',(error, resultado) => {
//         if(error) {
//             console.log("Error al leer el archivo")
//         }
//         console.log(resultado)
//         fs.appendFile('./ejemplo.txt','Soy info adicional','utf-8', (err) => {
//             if(err){
//                 console.log('Error al modificar el arcchivo')
//             }
//             fs.unlink('./ejemplo.txt',(error) => {
//                 if(error){
//                     console.log("Error al eliminar el archivo")
//                 }
//                 console.log("Elimnado el archivo")
//             })
//         })
//     })
// })

import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export const dataPath = `${__dirname}`
// console.log(dataPath)

// PROMISES

// async function ejecutarPromesasYArchivos(){
//     try{
//         // await fs.promises.writeFile('./ejemplo.txt','Estamos creando con promesas un archivo')
//         // await fs.promises.appendFile('./ejemplo.txt','Soy un elemento agregado')
//         // const resultado = await fs.promises.readFile('./ejemplo.txt','utf-8')
//         // console.log(resultado)
//         await fs.promises.unlink('./ejemplo.txt')

//     }catch (e){
//         console.log('Algo fallo')
//     }
// }

// ejecutarPromesasYArchivos()

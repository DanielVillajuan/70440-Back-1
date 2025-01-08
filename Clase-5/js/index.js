import { dataPath } from "../index.js"
import fs from 'node:fs'

async function ejecutarPromesasYArchivos(){
    try{
        // await fs.promises.writeFile(dataPath + '/files/ejemplo.txt',JSON.stringify({nombre: 'daniel'}))
        // await fs.promises.appendFile('./ejemplo.txt','Soy un elemento agregado')
        const resultado = JSON.parse(await fs.promises.readFile(dataPath + '/files/ejemplo.txt','utf-8'))
        console.log(resultado)
        // await fs.promises.unlink(dataPath + '/files/ejemplo.txt')

    }catch (e){
        console.log('Algo fallo')
    }
}

ejecutarPromesasYArchivos()

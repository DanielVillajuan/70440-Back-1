import express from 'express'
import producsRoute from './routes/products.router.js'
import cartsRoute from './routes/carts.router.js'
import homeRoute from './routes/home.router.js'
import realTimeProducts from './routes/realtimeproducts.router.js'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import {Server} from 'socket.io'
import ProductsManager from './class/productManager.js'

const app = express()
const productManager = new ProductsManager(__dirname + '/bbdd/products.json');

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static(__dirname + '/public'))
app.use('/api/products', producsRoute)
app.use('/api/carts', cartsRoute)
app.use('/home', homeRoute)
app.use('/realtimeproducts', realTimeProducts)

const httpServer = app.listen(8080,()=>{
    console.log("Servidor Iniciado")
})

export const socketServer = new Server(httpServer)

// rutas que tengan que ver con productos

socketServer.on('connection', async (socket)=>{
    console.log(`Nuev.Disp.Conect. ID: ${socket.id}`)
    const productsList = await productManager.getAllProducts()
    socket.emit('home', productsList)
    socket.emit('realtime', productsList)
    socket.on('nuevo-producto', async(producto)=>{
        await productManager.addProduct(producto)
        socketServer.emit('realtime', productsList) // emite a todos los sockets el evento realtime junto a la lista actualizada
    })
    socket.on('update-producto', async (producto)=>{
        await productManager.updateProduct(producto, producto.id)
        socketServer.emit('realtime',productsList)
    })
    socket.on('delete-product', async(id) => {
        await productManager.deleteProduct(id)
        socketServer.emit('realtime', productsList)
    })
})

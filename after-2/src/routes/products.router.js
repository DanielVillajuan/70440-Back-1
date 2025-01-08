import { Router } from "express";
import ProductsManager from '../class/productManager.js'
import { __dirname } from '../utils.js'
import { socketServer } from "../index.js";

const router = Router()
const productManager = new ProductsManager(__dirname + '/bbdd/products.json');

router.get('/', async (req,res)=>{
    const data = await productManager.getAllProducts()
    res.json(data)
})

router.get('/:pid', async (req,res)=>{
    const id = req.params.pid
    const data = await productManager.getProduct(id)
    res.json(data)
})

router.post('/', async (req,res)=>{
    const newProduct = req.body
    await productManager.addProduct(newProduct)
    const productsList = await productManager.getAllProducts()
    socketServer.emit('realtime', productsList)
    res.status(201).json(newProduct)

})

router.put('/:pid', async (req,res)=>{
    const id = req.params.pid
    const newProduct = req.body
    await productManager.updateProduct(newProduct,id)
    const productsList = await productManager.getAllProducts()
    socketServer.emit('realtime', productsList)
    res.status(201).json(newProduct)
})

router.delete('/:pid', async (req,res)=>{
    const id = req.params.pid
    await productManager.deleteProduct(id)
    const productsList = await productManager.getAllProducts()
    socketServer.emit('realtime', productsList)
    res.status(201).json({"mensaje": `Producto eliminado. id: ${id}'`})
})

export default router
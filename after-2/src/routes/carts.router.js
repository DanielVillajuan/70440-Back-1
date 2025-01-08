import { Router } from "express";
import ProductsManager from '../class/productManager.js'
import CartsManager from "../class/cartsManager.js";
import { __dirname } from '../utils.js'

const router = Router()
const cartsManager = new CartsManager(__dirname + '/bbdd/carts.json');

router.post('/', async (req,res)=>{
    const nuevoID = await cartsManager.addCart()
    res.status(201).json({"mensaje": "carrito creado", "id_nuevo_carrito": nuevoID })
})

router.get('/:cid', async (req,res)=>{
    const cid = req.params.cid
    const data = await cartsManager.getCart(cid)
    res.status(200).json(data)
})

router.post('/:cid/products/:pid', async (req,res)=>{
    const cid = req.params.cid
    const pid = req.params.pid
    await cartsManager.addProductToCart(cid,pid)
    res.status(200).json({"mensaje": "Producto agregado al carrito"})
})

export default router
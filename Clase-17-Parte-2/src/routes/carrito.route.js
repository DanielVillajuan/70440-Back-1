import { Router } from "express";
import { carritoModel } from "../models/carrito.model.js";

const route = Router()

route.get('/', async(req, res)=>{
    const result = await carritoModel.find().populate('productos.producto')
    res.json({result})
})

route.post('/', async(req, res)=>{
    const { monto, fecha } = req.body
    const result = await carritoModel.create({
        fecha,
        monto,
    })
    res.json({result})
})

route.put('/', async(req, res)=>{
    const { id } = req.params
    const carrito = await carritoModel.findById('678bd116272f67913a8a0266')

    carrito.productos.push({producto: '6782b27b5dfb033122ea2aee'})
    carrito.productos.push({producto: '6782b3a05dfb033122ea2af1'})

    const result = await carritoModel.updateOne({_id:'678bd116272f67913a8a0266'}, carrito)
    res.json({result})
})

route.put('/:idCarrito/:idProducto', async(req, res)=>{
    const { idCarrito, idProducto } = req.params
    // busco el carrito,
    // busco en el array de productos si existe uno con ese idProducto,
    // si existe, aumento el parametro cantidad,
    // sino, inserto el objeto {producto: idProducto}
    // actualizo el carrito

    const carrito = await carritoModel.findById('678bd116272f67913a8a0266')

    carrito.productos.push({producto: '6782b27b5dfb033122ea2aee'})
    carrito.productos.push({producto: '6782b3a05dfb033122ea2af1'})

    const result = await carritoModel.updateOne({_id:'678bd116272f67913a8a0266'}, carrito)
    res.json({result})
})

export default route

import { Router } from "express";
import { ProductModel } from "../models/product.model.js";
import { ProductManager } from "../class/ProductManager.js";
import { uploader } from "../utils.js";

const route = Router();
const model = new ProductManager(ProductModel)

route.get('/', async (req, res) => {
    const result = await model.findByQuery()
    if(!result) return res.json({ mensaje: 'No se encontro nada', payload: result })

    res.json({ payload: result })
})

route.get('/filter', async (req, res) => {
    const query = req.query
    const result = await model.findByQuery(query)
    if(!result) return res.json({ mensaje: 'Error en la consulta' })

    res.json({ payload: result })
})

route.post('/', uploader.single('image') ,async (req, res) => {
    const file = req.file
    const body = req.body

    const newProduct = {
        ...body,
        imagen: file.path
    }
    const result = await model.add(newProduct)

    res.status(201).json({payload: result})
})

export default route

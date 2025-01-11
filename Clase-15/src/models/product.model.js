import { model, Schema } from "mongoose"

const productCollection = 'product'

const productSchema = new Schema({
    titulo: String,
    descripcion: String,
    imagen: String,
    precio: Number,
    categoria: String,
    descuento: Boolean,
    precioConDescuento: Number,
    stock: Number
})
export const ProductModel = model(productCollection, productSchema)

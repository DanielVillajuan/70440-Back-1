import { model, Schema } from "mongoose"

const carritoColeccion = 'carrito'

const carritoSchema = new Schema({
    fecha: String,
    monto: Number,
    productos: {
        type: [{
            producto: {
                type: Schema.Types.ObjectId,
                ref: 'products'
            },
            cantidad: Number,
        }],
        default: []
    },
})

export const carritoModel = model(carritoColeccion, carritoSchema)


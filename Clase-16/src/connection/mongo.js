import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
export const mongoConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {dbName: 'Ecommerce'})
        console.log('base de datos conectada')
    } catch (e){
        console.log('Error al conectarse a la BBDD')
    }
}

import express from 'express'
import handlebars from 'express-handlebars'

import { __dirname } from './utils.js';
import ViewsRouter from './routes/view.router.js'
import ProductsRouter from './routes/product.route.js';
import UsersRouter from './routes/user.route.js';
import CarritoRouter from './routes/carrito.route.js';
import { mongoConnection } from './connection/mongo.js';

const app = express()
mongoConnection()
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine','handlebars')
app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', ViewsRouter)
app.use('/api/product', ProductsRouter)
app.use('/api/user', UsersRouter)
app.use('/api/carrito', CarritoRouter)


app.listen(8080,() => {
    console.log('Servidor conectado en 8080')
})

import express from 'express'
import handlebars from 'express-handlebars'
import viewRouter from './routes/viewRouter.router.js'
import __dirname from './utils.js'
import { Server } from 'socket.io'

const app = express()

const httpServer = app.listen(8080, () => {
    console.log('Servidor on')
})

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))
app.use('/', viewRouter)

const ioServer = new Server(httpServer)

ioServer.on('connection', socket => {
    console.log('Usuario conectado')
})

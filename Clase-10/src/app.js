import express from 'express'
import handlebars from 'express-handlebars'
import viewRouter from './routes/viewRouter.router.js'
import __dirname from './utils.js'
import { Server } from 'socket.io'
import { msg } from './managers/messages.js'

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

ioServer.on('connection', async (socket) => {
    console.log('Usuario conectado', socket.id)


    socket.on("message", async (message) => {
        await msg.create(message)
        ioServer.emit('messages_all', await msg.getAll())
    })

    socket.on('newUser', (username) => {
        console.log(username, 'se conecto al cliente')
        socket.broadcast.emit('newLogin', username)
    })

    socket.on('user_disconnect', (username)=> {
        console.log(username,'se desconecto')
        socket.broadcast.emit('closeLogin',username)
    })

    ioServer.emit('messages_all', await msg.getAll())

})

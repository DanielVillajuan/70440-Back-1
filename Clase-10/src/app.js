import express from 'express';
import handlebars from 'express-handlebars';
import{__dirname} from './utils.js'
import ViewRouters from './routes/views.route.js'
import { Server } from 'socket.io';

const app = express();

app.engine('handlebars', handlebars.engine()); // esta linea setea el tipo de motor de plantilla
app.set('views', __dirname + '/views');
app.set('view engine','handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/',ViewRouters);


const httpServer = app.listen(8080, () => {
    console.log('Conectado')
})

const socketServer = new Server(httpServer)

socketServer.on('connection', (socket) => {
    console.log('id socket: ',socket.id)
    console.log('N° sockets conectados: ',socketServer.engine.clientsCount)
    console.log('Nuevo dispositivo conectado')

    socket.on('mensaje',(data) => {
        console.log('Evento mensaje con data: ',data)
    })

    socket.emit('mensaje_respuesta','mensaje de respuesta desde el servidor')

    socketServer.emit('mensaje_para_todos',' hoal a todos')
})

import express from 'express';
import { create } from 'express-handlebars';
import ProductRouter from './routes/products.route.js';
import CartRouter from './routes/cart.route.js';
import ViewsRouter from './routes/views.route.js'
import { __dirname } from './utils.js';
import { Server } from 'socket.io'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { chatModel } from './Dao/models/Chat.model.js';
dotenv.config();

const port = process.env.PORT || 8080;
const app = express();
const hbs = create({});

const httpServer = app.listen(port, () => {
    console.log(`Connect server to port ${port}`)
})

app.engine('handlebars', hbs.engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))


app.use('/', ViewsRouter);
app.use('/api/product/', ProductRouter);
app.use('/api/cart/', CartRouter);


export const socketServer = new Server(httpServer);

socketServer.on('connection', socket => {
    socket.on('message',async (data) =>{
        await chatModel.create({
            user: data.user,
            message: data.message
        })
        socketServer.emit('logs', await chatModel.find().lean())
    })
});

mongoose.connect('mongodb+srv://danielvillajuan:qpCcWENKy5dp6gRi@coderback.dkldvkl.mongodb.net/?retryWrites=true&w=majority&appName=Coderback', { dbName: 'ecommerce' }).then(()=>{
    console.log('connect to database')
})

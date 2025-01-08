import express from 'express'
import { __dirname } from './utils.js';
import UserRoute from './routes/usuarios.router.js'
const app = express();

// middlewares
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/api/usuarios/', UserRoute);

app.listen(8080,() => {
    console.log('Servidor listo');
})

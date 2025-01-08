import express from 'express';
import handlebars from 'express-handlebars';
import{__dirname} from './utils.js'
import ViewRouters from './routes/views.route.js'

const app = express();

app.engine('handlebars', handlebars.engine()); // esta linea setea el tipo de motor de plantilla
app.set('views', __dirname + '/views');
app.set('view engine','handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/',ViewRouters);

const BBDD = []

app.post('/api/usuario', (req, res) => {
    BBDD.push(req.body);
    res.json({message: 'recibido'})
})

app.get('/api/usuario', (req, res) => {
    res.json(BBDD)
})

app.listen(8080, () => {
    console.log('Conectado')
})


import { Router } from "express";

const app = Router();

app.get('/', (req, res) => {
    const { nombre } = req.query
    res.render('saludo',{
        name: nombre,
        edad: 28
    })
})

app.get('/admin', (req, res) => {
    res.render('admin',{
        isAdmin: false,
        notas: [{
            titulo: 'Articulo 1',
            description: 'lorem no se cuanto'
        },{
            titulo: 'Articulo 2',
            description: 'lorem no se cuanto 2'
        }]
    })
})

app.get('/register', (req, res) => {
    res.render('register',{})
})


export default app;

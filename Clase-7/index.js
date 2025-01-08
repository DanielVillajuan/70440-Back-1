import express from 'express'

const app = express();

// middleware
app.use(express.json()); // body-parse
app.use(express.urlencoded({ extended: true })); // los formularios podran ser recibidos y comprendidos

let BBDD = []
let id = 0;


app.get('/api/usuario/', (req, res) => {

    res.status(202).json({
        payload: [...BBDD],
        mensaje: 'Todo ok'
    })
});

app.post('/api/usuario/', (req, res) => {
    const usuario = req.body // aca recibimos todo lo que venga desde BODY

    if(usuario.nombre === '' || usuario.edad === 0){ // validar si hay contenido
        return res.status(400).json({
            detalle: 'funciono mal porque sos un bolu y te olvidaste algo',
        })
    }
    // codigo a guardar en nuetra base de datos
    id = id + 1
    BBDD.push({
        ...usuario,
        id
    })
    // respuesta de que salio todo ok
    res.status(200).json({
        ...usuario,
        mensaje: 'funciono tood bien',
    })
   
})

app.put('/api/usuario/:id', (req, res) => {
    const usuarioModificado = req.body;
    const { id } = req.params;

    if(id !== '45y347y543'){
        return res.status(400).json({
            detalle: 'funciono mal porque sos un bolu y te olvidaste algo',
    
        })
    }
    // buscariamos al usuario a modificar, pisamos los valores y devolvemos el usuario modificado

    // respuesta de que salio todo ok
    res.status(200).json({
        ...usuario,
        mensaje: 'funciono tood bien',
    })
})

app.delete('/api/usuario/:id',(req, res) => {
    const { id } = req.params;

    // buscamos por id el recurso y lo eliminamos
    const BBDDFiltrado = BBDD.filter(usuario => usuario.id !== id)
    BBDD = [...BBDDFiltrado]

    // slice, sabiendo el index del usuario
    res.json({
        mensaje: 'El recurso se elimino por completo'
    })
})

app.get('/api/productos',(req, res) => {

})

// N cantidad de metodos


app.listen(8080,() => {
    console.log('Servidor listo');
})

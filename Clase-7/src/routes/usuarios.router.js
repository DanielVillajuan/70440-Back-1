import { Router } from "express";
import { uploader } from "../utils.js";

const router = Router();

let BBDD = []
let id = 0;

// router.use((req, res, next) => {
//     req.timestamp = new Date();
//     console.log('pasamos por el middle de la routa')
//     next();
// })


router.get('/', (req, res) => {
    console.log(req.timestamp + 'ejecutado desde el metodo get');
    res.status(202).json({
        payload: [...BBDD],
        mensaje: 'Todo ok'
    })
});

router.post('/', uploader.single("file") ,(req, res) => {
    console.log(req.file.path)

}) 

router.put('/:id', (req, res) => {
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

router.delete('/:id',(req, res) => {
    const { id } = req.params;

    // buscamos por id el recurso y lo eliminamos
    const BBDDFiltrado = BBDD.filter(usuario => usuario.id !== id)
    BBDD = [...BBDDFiltrado]

    // slice, sabiendo el index del usuario
    res.json({
        mensaje: 'El recurso se elimino por completo'
    })
})

router.get('/curso/:id',(req, res, next)=>{
    // validacion de que intreso un id del curso
    console.log(req.timestamp + 'este es desde curso/:id');
    req.date = new Date();

    next();
},(req, res)=>{
    console.log(req.date)
    res.json({message: 'usuario con el curso' + id})
}) // definiendo middleware para un endpoint

export default router;

import express from "express";

const app = express();

const bbdd = [
  {
    name: "Daniel",
    id: 1,
    edad: 29,
  },
  {
    name: "Pedro",
    id: 2,
    edad: 19,
  },
  {
    name: "Pablo",
    id: 3,
    edad: 20,
  },
];

// solicitudes

app.get("/", (req, res) => {
  // <----- endpoint
  res.send("Hola buenas noches");
});

app.get("/usuarios", (req, res) => {
  const { nombre, edad } = req.query;
  if(nombre) {
    const userFinded = bbdd.find(user => user.name === nombre)
    res.send(userFinded)
  }else{ 
      res.send("path con query");
    }
});

app.post('/usuarios',(req, res)=>{
    // req.body
})

app.get('/usuarios/:userId/detalle', (req, res)=>{
    console.log(req.params);
    res.send('user params')
})

app.get("/holamundo", (req, res) => {
  res.send("Hola mundo");
});

app.listen(8080, () => {
  console.log("Servidor listo");
});

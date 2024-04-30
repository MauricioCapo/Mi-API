const express = require('express');
const mongoose= require('mongoose');
require('dotenv').config();
const usuariorutas = require ("./rutas/usuario");

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use('/api', usuariorutas);


//rutas
app.get('/', (req,res) => {
    res.send('Bienvenido a mi API');
});

//conexion mongodb
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('connected to mongodb Atlas'))
.catch((error) => console.error(error));



app.listen(port,() => console.log('El servidor esta funcionando en el puerto ',port));
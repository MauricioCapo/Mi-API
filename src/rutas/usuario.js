const express = require("express");
const usuarioSchema = require("../models/usuario");

const router = express.Router();

//crear usuario
router.post('/usuario', (req,res) => {
    const usuario = usuarioSchema(req.body);
    usuario
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}); 

//obtener todos los usuarios 
router.get('/usuario', (req,res) => {
    usuarioSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}); 
//obtener un usuario
router.get('/usuario/:id', (req,res) => {
    const { id } = req.params;
    usuarioSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}); 
///actualizar usuario
router.put('/usuario/:id', (req,res) => {
    const { id } = req.params;
    const {Nombre, edad, email } = req.body;
    usuarioSchema
    .updateOne({ _id: id },{ $set: { Nombre, edad, email}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}); 
///eliminar usuario
router.delete('/usuario/:id', (req,res) => {
    const { id } = req.params;
    usuarioSchema
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}); 


module.exports = router;
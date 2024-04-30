const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
    Nombre: {
        type: String,
        required: true
    },
    edad: {
        type : Number,
        required:true
    },
    email: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model('usuario', usuarioSchema);
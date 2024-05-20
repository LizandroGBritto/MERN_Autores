const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre del autor es requerido"],
        minlength: [3, "El nombre del autor debe tener al menos 3 caracteres"]
    }
}, { timestamps: true });

module.exports.AutorModel = mongoose.model('Autor', AutorSchema);
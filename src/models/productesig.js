const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombreEISG: { type: String, required: true }, // Campo obligatorio
    descripcionEISG: { type: String, required: false }, // Campo opcional
    precio: { type: mongoose.Decimal128, required: true } // Campo obligatorio
});


module.exports = mongoose.model('Productesig', productSchema);
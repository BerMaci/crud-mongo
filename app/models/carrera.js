const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const storeSchema = new Schema({
    localidad: {
        type: String,
        required:true,
        // unique:true,
    },
    area: {
        type: String,
        required: true,
    },
    carrera: {
        type: String,
    },
    duracion: {
        type:Number,
        required:true,
    },
   titulo: {
    type: String,
    required: true,
    },
    cursada: {
        type: String,
    },
   precio: {
    type: String,
    required: true,

   },
});
const carreras = mongoose.model('carreras', storeSchema);


module.exports = {carreras}

import mongoose from "mongoose";

const FormularioSchema = mongoose.Schema({
    namePet: { type: String, required: true, maxlenght: 30 },
    propietario: { type: String, required: true, maxlenght: 30 },
    telefono: { type: String, required: true, maxlenght: 15 },
    sintomas: { type: String, required: true, maxlenght: 200 },
    hora:{type: String, required: true},
    fecha: { type: Date, required: true},
    createAt: { type: Date, default: Date.now }

})

export default mongoose.model('formulario', FormularioSchema); 
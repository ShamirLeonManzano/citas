import Formulario from '../models/Cita.js'

 const FormularioControllers = {
    FormularioGet: async (req, res) => {
        const value = req.query.value;
        const formulario = await Formulario
            .find({
                $or: [
                    { namePet: new RegExp(value, 'i') },
                    { propietario: new RegExp(value, 'i') },
                    { telefono: new RegExp(value, 'i') },
                    { sintomas: new RegExp(value, 'i') },
                ]
            })
            .sort({ 'Nombre_Mascota': -1 })

        res.json({
            formulario
        })
    },

    FormularioPost: async (req, res) => {
        const { namePet, propietario, telefono, sintomas,hora,fecha } = req.body;
        const formulario = new Formulario({ namePet, propietario, telefono, sintomas,hora,fecha })

        await formulario.save();

        res.json({
            formulario
        })
    }
}

export default  FormularioControllers;
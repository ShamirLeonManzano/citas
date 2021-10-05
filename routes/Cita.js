import {Router} from 'express';
import {check} from 'express-validator';
import FormularioControllers from '../controllers/Cita.js'


const router=Router();

router.get('/',FormularioControllers.FormularioGet);

router.post('/',[
    check('namePet','El Nombre de la mascota es obligatorio').notEmpty(),
    check('propietario','El Nombre del Propietario es es obligatorio').notEmpty(),
    check('telefono','El Telefono del propietario es  obligatorio').notEmpty(),
    check('sintomas','el campo Sintomas es obligatorio').notEmpty(),
   
],FormularioControllers.FormularioPost);

export default router;
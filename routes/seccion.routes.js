import { Router } from 'express';
import bodyParser from 'body-parser';
import { seccionController } from '../controllers/seccion.controller.js';


const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/all_docentes', (req, res) => seccionController.docente_view(req, res));


router.post('/create_docentes', (req, res) =>seccionController.docente_create(req, res));


export default router;
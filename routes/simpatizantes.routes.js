import { Router } from 'express';
import bodyParser from 'body-parser';
import { simpatizantesController } from '../controllers/simpatizantes.controller.js';

const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

/**
 * @openapi
 * '/api/simpatizantes/Screate':
 *  post:
 *     tags:
 *     - simpatizantes
 *     summary: Crear simpatizantes
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - cveElectoral
 *              - curp
 *              - nombre
 *              - apaterno
 *              - amaterno
 *              - fecha_nac
 *              - sexo
 *              - domicilio
 *              - colonia
 *              - localidad
 *              - municipio
 *              - estado
 *              - numtelefono
 *              - facebook
 *              - instagram
 *              - otrared
 *              - userName
 *              - cvesec
 *            properties:
 *              cveElectoral:
 *                type: string
 *                default: CRGMLS01050307H200
 *              curp:
 *                type: string
 *                default: CUGL010503HCSRMSA2
 *              nombre:
 *                type: string
 *                default: Luis Daniel
 *              apaterno:
 *                type: string
 *                default: Cruz
 *              amaterno:
 *                type: string
 *                default: Gomez
 *              fecha_nac:
 *                type: string
 *                default: 03/05/2001
 *              sexo:
 *                type: string
 *                default: H
 *              domicilio:
 *                type: string
 *                default: Av Primavera
 *              colonia:
 *                type: string
 *                default: La Alborada
 *              localidad:
 *                type: string
 *                default: Tuxtla Gutierrez
 *              municipio:
 *                type: string
 *                default: Tuxtla Gutierrez
 *              estado:
 *                type: string
 *                default: Chiapas
 *              numtelefono:
 *                type: string
 *                default: 9612464778
 *              facebook:
 *                type: string
 *                default: Luis Daniel Cruz
 *              instagram:
 *                type: string
 *                default: Luis Daniel Cruz
 *              otrared:
 *                type: string
 *                default: S/C
 *              userName:
 *                type: string
 *                default: abel.perez@afiliaccion.net
 *              cvesec:
 *                type: string
 *                default: 1645
 *              idcliente:
 *                type: string
 *                default: P001
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

 router.post('/Screate', (req, res) => simpatizantesController.simpatizantes_create(req, res));


router.get('/view', (req, res) => simpatizantesController.simpatizantes_view(req, res));

router.get('/spc', (req,res) => simpatizantesController.simpatizantesSeccion_view(req,res));

/**
 * @openapi
 * '/api/simpatizantes/viewAll':
 *  get:
 *     tags:
 *     - simpatizantes
 *     summary: visualizar simpatizantes
 *     responses:
 *      200:
 *        description: View
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

router.get('/viewAll', (req, res) => simpatizantesController.simpatizantes_viewAll(req, res));


/**
 * @openapi
 * '/api/simpatizantes/delete':
 *  delete:
 *     tags:
 *     - simpatizantes
 *     summary: eliminar
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - cveElectoral
 *            properties:
 *              cveElectoral:
 *                type: string
 *                default: CRGMLS01050307H200
 *     responses:
 *      200:
 *        description: Delete
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

router.delete('/delete', (req,res) => simpatizantesController.simpatizantes_delete(req,res));

/**
 * @openapi
 * '/api/simpatizantes/update':
 *  put:
 *     tags:
 *     - simpatizantes
 *     summary: Actualizar simpatizantes
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - cveElectoral
 *              - curp
 *              - nombre
 *              - apaterno
 *              - amaterno
 *              - fecha_nac
 *              - sexo
 *              - domicilio
 *              - colonia
 *              - localidad
 *              - municipio
 *              - estado
 *              - numtelefono
 *              - facebook
 *              - instagram
 *              - otrared
 *              - userName
 *              - cvesec
 *            properties:
 *              cveElectoral:
 *                type: string
 *                default: CRGMLS01050307H200
 *              curp:
 *                type: string
 *                default: CUGL010503HCSRMSA2
 *              nombre:
 *                type: string
 *                default: Luis Daniel
 *              apaterno:
 *                type: string
 *                default: Cruz
 *              amaterno:
 *                type: string
 *                default: Gomez
 *              fecha_nac:
 *                type: string
 *                default: 03/05/2001
 *              sexo:
 *                type: string
 *                default: H
 *              domicilio:
 *                type: string
 *                default: Av Primavera
 *              colonia:
 *                type: string
 *                default: La Alborada
 *              localidad:
 *                type: string
 *                default: Tuxtla Gutierrez
 *              municipio:
 *                type: string
 *                default: Tuxtla Gutierrez
 *              estado:
 *                type: string
 *                default: Chiapas
 *              numtelefono:
 *                type: string
 *                default: 9612464778
 *              facebook:
 *                type: string
 *                default: Luis Daniel Cruz
 *              instagram:
 *                type: string
 *                default: Luis Daniel Cruz
 *              otrared:
 *                type: string
 *                default: S/C
 *              userName:
 *                type: string
 *                default: abel.perez@afiliaccion.net
 *              cvesec:
 *                type: string
 *                default: 1645
 *              idcliente:
 *                type: string
 *                default: P001
 *     responses:
 *      200:
 *        description: Update
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */


router.put('/update', (req,res) => simpatizantesController.simpatizantes_update(req,res));


export default router;
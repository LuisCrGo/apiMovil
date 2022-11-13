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
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

 router.post('/Screate', (req, res) => simpatizantesController.simpatizantes_create(req, res));

 export default router;
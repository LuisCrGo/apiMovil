import { Router } from 'express';
import bodyParser from 'body-parser';
import { loginController } from '../controllers/login.controller.js';

const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

/**
 * @openapi
 * '/api/login/login':
 *  post:
 *     tags:
 *     - login
 *     summary: Incio de Sesion
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - userName
 *              - pass
 *            properties:
 *              userName:
 *                type: string
 *                default: luis.cruz@afiliaccion.net
 *              pass:
 *                type: string
 *                default: 1234
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */


router.post('/login', (req, res) =>loginController.user_login(req, res));

/**
 * @openapi
 * '/api/login/create':
 *  post:
 *     tags:
 *     - login
 *     summary: Crea usuario
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - userName
 *              - pass
 *              - nombrelider
 *              - apaternolider
 *              - amaternolider
 *              - idcliente
 *            properties:
 *              userName:
 *                type: string
 *                default: luis.cruz@afiliaccion.net
 *              pass:
 *                type: string
 *                default: 1234
 *              nombrelider:
 *                type: string
 *                default: Luis Daniel
 *              apaternolider:
 *                type: string
 *                default: Cruz
 *              amaternolider:
 *                type: string
 *                default: Gomez
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

router.post('/create', (req, res) => loginController.user_create(req, res));

/**
 * @openapi
 * '/api/login/recovery':
 *  put:
 *     tags:
 *     - login
 *     summary: update password
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - userName
 *              - pass
 *            properties:
 *              userName:
 *                type: string
 *                default: luis.cruz@afiliaccion.net
 *              pass:
 *                type: string
 *                default: luis4321
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

router.put("/recovery", (req,res) => loginController.user_update(req,res));

export default router;
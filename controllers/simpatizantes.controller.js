import { Router } from 'express';
import { dataEnv } from '../config/envData.js';
import { getSimpatizantes } from '../model/simpatizantes.js';
import bodyParser from "body-parser";

const router = Router();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });


const simpatizantes_create = async (req,res) => {
    const cveElectoral = req.body.cveElectoral;
    const curp = req.body.curp;
    const nombre = req.body.nombre;
    const apaterno = req.body.apaterno;
    const amaterno = req.body.amaterno;
    const fecha_nac = req.body.fecha_nac;
    const sexo = req.body.sexo;
    const domicilio = req.body.domicilio;
    const colonia = req.body.colonia;
    const localidad = req.body.localidad;
    const municipio = req.body.municipio;
    const estado = req.body.estado;
    const numtelefono = req.body.numtelefono;
    const facebook = req.body.facebook;
    const instagram = req.body.instagram;
    const otrared = req.body.otrared;
    const cveseccion = req.body.cveseccion;

    getSimpatizantes.create ({
        cveElectoral,
        curp,
        nombre,
        apaterno,
        amaterno,
        fecha_nac,
        sexo,
        domicilio,
        colonia,
        localidad,
        municipio,
        estado,
        numtelefono,
        facebook,
        instagram,
        otrared,
        cveseccion,
    },
    {fields: ["cveElectoral", "curp", "nombre","apaterno","amaterno",
    "fecha_nac", "sexo", "domicilio","colonia","localidad",
    "municipio", "estado", "numtelefono","facebook","instagram","otrared","cveseccion"]})
    .then(simpatizantes => {
        res.send(simpatizantes);
    })
    .catch((err)=> {
        console.log(err);
    })

};

export const simpatizantesController = {simpatizantes_create};
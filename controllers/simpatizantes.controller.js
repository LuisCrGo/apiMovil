import { Router } from 'express';
import { dataEnv } from '../config/envData.js';
import { getSimpatizantes } from '../model/simpatizantes.js';
import bodyParser from "body-parser";

const router = Router();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });


const simpatizantes_view = async (req,res) => {
    // console.log(req.query.nombre)
    getSimpatizantes.findAll({ where: { nombre: req.query.nombre }})
    
    .then(simpatizantes => {
        res.send(simpatizantes)
    })
    .catch(err => {
        res.status(400).json({ err: 'Error al hacer la consulta' });    
    })
} 


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
    const cvesec = req.body.cvesec;
    const userName = req.body.userName;
    const idcliente = req.body.idcliente;

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
        userName,
        cvesec,
        idcliente,
    },
    {fields: ["cveElectoral", "curp", "nombre","apaterno","amaterno",
    "fecha_nac", "sexo", "domicilio","colonia","localidad",
    "municipio", "estado", "numtelefono","facebook","instagram","otrared","userName","cvesec","idcliente"]})
    .then(simpatizantes => {
        res.send(simpatizantes);
    })
    .catch((err)=> {
        res.status(400).json({ err: 'Registro Fallido' });
    })

};


const simpatizantesSeccion_view = async (req,res) => {
    // console.log(req.query.nombre)
    getSimpatizantes.findAll({ where: { cvesec: req.query.cvesec },
        attributes:['localidad','municipio','nombre','apaterno','amaterno','cvesec'] })
    
    .then(simpatizantes => {
        res.send(simpatizantes)
    })
    .catch(err => {
        res.status(400).json({ err: 'Error al hacer la consulta' });    
    })
}

const simpatizantes_delete = async (req,res) => {
    const cveElectoral = req.body.cveElectoral;
    getSimpatizantes.destroy({where: {cveElectoral:cveElectoral}})
    .then((r) => {
        res.status(200).json({ message: "Registro Eliminado" });
    })
    .catch((err) => {
        res.status(400).json({ err: 'Error al eliminar' });    
    });
}

const simpatizantes_update = async (req,res) => {
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
    const cvesec = req.body.cvesec;
    const userName = req.body.userName;
    const idcliente = req.body.idcliente;

    getSimpatizantes.findOne({ where: {cveElectoral:cveElectoral}})
    .then((simpatizantes) => {
        simpatizantes.update({cveElectoral:cveElectoral, curp:curp, nombre:nombre, apaterno:apaterno,amaterno:amaterno, fecha_nac:fecha_nac,
        sexo:sexo,domicilio:domicilio, colonia:colonia,localidad:localidad, municipio:municipio, estado:estado, numtelefono: numtelefono, facebook:facebook, instagram:instagram,
        otrared:otrared, cvesec:cvesec, userName:userName, idcliente:idcliente})
        res.status(200).json({ successfully: 'Simpatizante Actualizado' });
    })
    .catch((err) => {
        err.status(400).json({ err: 'Error al actualizar' });
    })

}


export const simpatizantesController = {simpatizantes_create, simpatizantes_view, simpatizantesSeccion_view, simpatizantes_delete, simpatizantes_update};
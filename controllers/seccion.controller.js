import { Router } from 'express';

import { getSeccion } from '../model/seccion.js';

const router = Router();

const docente_view = async(req, res) => {
    getSeccion.findAll({ 
        // include:{
        //     model:getTesisPre,
        //     attributes:['name','lastNamef','lastNamem','age']
        // },
        attributes: ['nombreDocente','idCarrera',] })
        .then(docen => {
            res.send(docen)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const docente_create = async(req, res) => {

        getSeccion.create({
        nombreDocente: req.query.nombreDocente,
        idCarrera: req.query.idCarrera
    })
        .then(docen => {
            res.send(docen);
        })
        .catch((err) => {
            console.log(err);
        });
}

export const seccionController = {docente_view,docente_create};
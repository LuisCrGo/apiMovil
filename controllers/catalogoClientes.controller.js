import { Router } from 'express';

import { getClientes } from '../model/catalogoClientes.js';

const router = Router();

const docente_view = async(req, res) => {
    getClientes.findAll({ 
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

        getClientes.create({
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

export const clientesController = {docente_view,docente_create};
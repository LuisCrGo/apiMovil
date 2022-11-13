import { getData } from "../config/connection.config.js";
import { DataTypes } from 'sequelize';
import { getLogin } from "./login.js";
// import bcrypt from "bcrypt";


const simpatizantes = getData.sequelizeClient.define('simpatizantes', {
    cveElectoral: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    curp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apaterno: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amaterno: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_nac: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    domicilio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    colonia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    localidad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    municipio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numtelefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    facebook: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    instagram: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    otrared: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // cvesec: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
},
{
    tableName: 'simpatizantes',
});



export const getSimpatizantes = simpatizantes;
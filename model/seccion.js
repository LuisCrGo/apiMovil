import { getData } from "../config/connection.config.js";
import { DataTypes } from 'sequelize';
import { getSimpatizantes } from "./simpatizantes.js";


const seccion = getData.sequelizeClient.define('seccion', {
    cvesec: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
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
},
{
    tableName: 'seccion',
})

seccion.hasMany(getSimpatizantes, {
    foreignKey: 'cvesec'
});

export const getSeccion = seccion;
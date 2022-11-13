import { getData } from "../config/connection.config.js";
import { DataTypes } from 'sequelize';
import { getSimpatizantes } from "./simpatizantes.js";


const catalogoClientes = getData.sequelizeClient.define('catalogoClientes', {
    idcliente: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    candidato: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    coordinador: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    responsable_ti: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    tableName: 'catalogoClientes',
})

catalogoClientes.hasMany(getSimpatizantes, {
    foreignKey: 'idcliente'
});

export const getClientes = catalogoClientes;
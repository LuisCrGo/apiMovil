import { getData } from "../config/connection.config.js";
import { DataTypes } from 'sequelize';
import bcrypt from "bcrypt";
import { getSimpatizantes } from "./simpatizantes.js";


const login = getData.sequelizeClient.define('login', {
    userName: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    nombrelider: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apaternolider: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amaternolider: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direcclider: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefonolider: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idcliente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
},
{
    tableName: 'login',
    freezeTableName: true,
    hooks: {
     beforeCreate: (user, options) => {
         user.pass = user.pass && user.pass != "" ? bcrypt.hashSync(user.pass, 10): "";    
     }
    }
})

login.hasMany(getSimpatizantes, {
    foreignKey: 'userName'
});
// getSimpatizantes.belongsTo(login);

export const getLogin = login;
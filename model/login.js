import { getData } from "../config/connection.config.js";
import { DataTypes } from 'sequelize';
import bcrypt from "bcrypt";


const login = getData.sequelizeClient.define('login', {
    userName: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idpartido: {
        type: DataTypes.STRING,
        allowNull: false,
    }
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

export const getLogin = login;
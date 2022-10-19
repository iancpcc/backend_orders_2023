import { DataTypes, Model } from "sequelize";

import { Role } from '@entity/RoleEntity';
import { SequelizeDB } from "../connection";

const sequelize = SequelizeDB.init();

export class RoleDB extends Model { }

RoleDB.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true
        
    },
    role: {
        type: DataTypes.STRING,
        unique: true
    }

}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'role' // We need to choose the model name
});


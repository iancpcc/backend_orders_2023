import { DataTypes, Model } from "sequelize";

import { Role } from "@domain/entity/RoleEntity";
import { SequelizeDB } from "../connection";
import { UserEntity } from '@entity/UserEntity/index';

const sequelize = SequelizeDB.init();

export class UserModel extends Model<UserEntity> implements UserEntity {
    id?: any;
    email?: string;
    password?: string;
    google?: boolean;
    active?: boolean;
    device?: string;
    role?: Role;
}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    google: {
        field: "google_sign_in",
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    device: {
        field: "token_device",
        type: DataTypes.STRING,
    },
    role: {
        field: "role_id",
        type : DataTypes.INTEGER,
        references: {
            model: 'RoleDB',
            key: 'id'
        },
    },
},
    {
        sequelize,
        modelName: 'user',
    });


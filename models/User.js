import {
    Sequelize
} from "sequelize";

import db from "../config/db.js";

const {
    DataTypes
} = Sequelize;

const User = db.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default User;
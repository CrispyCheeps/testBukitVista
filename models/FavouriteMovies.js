import {
    Sequelize
} from "sequelize";

import db from "../config/db.js";

const {
    DataTypes
} = Sequelize;

const FavouriteMovies = db.define('favourite_movies', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true
});

export default FavouriteMovies;
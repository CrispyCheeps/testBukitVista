import sequelize from "sequelize";
import { Sequelize } from "sequelize";

const db = new Sequelize('db_testbukitvista', 'root', '', {
    host : 'localhost',
    dialect: 'mysql'
});

// const { QueryTypes} = require('sequelize');
// const userFavMoviesList = await sequelize.query(
//     'SELECT * FROM FavouriteMovies WHERE FavouriteMovies.user_id = ?',
//     {
//         replacements:['active'],
//         type:QueryTypes.SELECT
//     }
// )

export default db;

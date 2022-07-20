import express  from "express";

import {
    getUsers,
    addFavouriteMovie,
    moviePosterByTitle,
    getMovieForbidden,
    listMoviePosterByTitle
} from "../controllers/usersMovies.js";
import User from "../models/User.js";
import FavouriteMovies from "../models/FavouriteMovies.js";

const router = express.Router();

router.get('/user', getUsers);
router.get('/movies', getMovieForbidden);
router.get('/movies/:title', moviePosterByTitle);
router.get('/movies/favourite/:userId', listMoviePosterByTitle);
router.post('/movies/favourite', addFavouriteMovie);

export default router;
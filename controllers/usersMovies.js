import User from "../models/User.js";
import FavouriteMovies from "../models/FavouriteMovies.js";
import axios from "axios";
import { response } from "express";
import sequelize from "sequelize";

//Get users
export const getUsers = async (req, res) => {
    try{
        const users = await User.findAll();
        res.send(users);
    } catch (err) {
        console.log(err);
    }
}

// Get movies (forbidden)
export const getMovieForbidden = async(req, res) => { 
    res.status(403).send('Forbidden');
}

//get movie poster by title
export const moviePosterByTitle = async(req,res) => {
    try {
        axios.get('https://www.omdbapi.com/?apikey=c10db8fc&t=' + req.params.title)
        .then((resp) => {
            res.send(resp.data.Poster);
        })
    } catch (error) {
        console.log(error);
    }
}

function moviePoster(title) {
    return axios.get('https://www.omdbapi.com/?apikey=c10db8fc&t=' + title);
}

//Return all poster url of that user’s favorite movies
export const listMoviePosterByTitle = async(req, res) => {
    try {
        const temp = [];
        const listMovie = await FavouriteMovies.findAll({
            where:{
                user_id: req.params.userId,
            },
        });
        listMovie.map((movie) => {
            const hasil = {
                "title": movie.title,
                "poster" : moviePoster(movie.title)
            }
            temp.push(hasil);
        });
        res.send(temp);
    } catch (error) {
        console.log(error);
    }
}
    

//post favouriteMovie
export const addFavouriteMovie = async (req, res) => {
    try{
        await FavouriteMovies.create(req.body);
        res.json({
            "message" : "Movie added"
        });
    } catch (err) {
        console.log(err);
    }
}


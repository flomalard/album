import express from "express";
import { Album } from "../../models/Album.js";
import { MOCK_ALBUMS } from "../../mock/albums.js";

const albums = express();

// affichage au format json des albums
// http://localhost:3000/api/albums
albums.get('/', (request, response) => {
    Album.find({}).then(albums => {
        response.status(200).json(albums);
    }).catch(err => {
        response.status(400).json(err);
    })
});

// Récupération des données du mock et stockage dans la db, le mock et cette request deviennent obsolètes après utilisation
// http://localhost:3000/api/albums
albums.get('/seed', (request, response) => {
    Album.insertMany(MOCK_ALBUMS).then(albums => 
        response.status(200).json({data: albums, message: 'OK!'})
    ).catch(err => {
        response.status(400).json(err);
    });
});

export default albums
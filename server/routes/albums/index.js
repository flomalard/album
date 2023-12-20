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
// http://localhost:3000/api/albums/seed
/*

albums.get('/seed', (request, response) => {
    Album.insertMany(MOCK_ALBUMS).then(albums => 
        response.status(200).json({data: albums, message: 'OK!'})
    ).catch(err => {
        response.status(400).json(err);
    });
});

*/

// http://localhost:3000/api/albums/:id
albums.get('/:id', (req, res) => {
    const {id} = req.params
    Album.findById(id)

    // JeNommeCommeJeVeux, donnée récupérée par get
    .then((JeNommeCommeJeVeux) => {

        // si JeNommeCommeJeVeux est vide
        if (!JeNommeCommeJeVeux) {
            res.status(404).send('Error 404, Not Found')

            // sinon JeNommeCommeJeVeux s'affiche, le else est important, puisque res n'effectu pas de return. Sans lui, si on entre dans la 404, on ira ensuite dans la 200
        } else {
            res.status(200).json(JeNommeCommeJeVeux)
        }
    }).catch(err => {
        res.status(400).json(err)
    })
})

export default albums
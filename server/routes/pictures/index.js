import express from "express";
import { Picture } from "../../models/Picture.js";
import { MOCK_PICTURES } from "../../mock/pictures.js";

const pictures = express();

// http://localhost:3000/api/pictures
pictures.get('/', (request, response) => {
    Picture.find({}).then(pictures => {
        response.status(200).json(pictures);
    }).catch(err => {
        response.status(400).json(err);
    })
});




// Récupération des données du mock et stockage dans la db, le mock et cette request deviennent obsolètes après utilisation
// http://localhost:3000/api/pictures/seed
/*

pictures.get('/seed', (request, response) => {
    Picture.insertMany(MOCK_PICTURES).then(pictures => 
        response.status(200).json({data: pictures, message: 'OK!'})
    ).catch(err => {
        response.status(400).json(err);
    });
});

*/



// http://localhost:3000/api/pictures/:id
pictures.get('/:id', (req, res) => {
    const {id} = req.params
    Picture.findById(id)

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

export default pictures
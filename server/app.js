import express from "express";
import { connect } from "./mongoose/index.js";
import routes from "./routes/index.js";

const PORT = 3000; //on défini le port du serveur

const app = express(); //lancement serveur
app.use(express.json()); //retour format json

connect();

// les routes utilisés dans routes/index.js seront préfixés d' /api
// http://localhost:3000/api/
app.use('/api', routes);

// réponse attendu sur http://localhost:3000/
app.get('/', (req, res) => {
    // res.send('Hello World!'); pour un simple format texte
    res.status(200).json({   //pour un format json
        // importance de status ?
        data: ["Hello", "World"],
        message: "Ceci est un test"
    });
});

// réponse attendu dans le cas ou aucune réponse antérieure ne convenait
app.get('*', (req, res) => {
    res.status(404).json({
        message: "Not found"
    });
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Adress: http://localhost:${PORT}`)
  // dans le terminal, pas la console ?
});


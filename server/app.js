import express from "express";

const PORT = 3000; //on défini le port du serveur

const app = express(); //lancement serveur
app.use(express.json()); //retour format json


// réponse attendu sur http://localhost:3000/
app.get('/', (req, res) => {
    res.status(200).json({
        // importance de status ?
        data: ["Hello", "World"],
        message: "OK c'est bon"
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


import mongoose from "mongoose";

// Connection à la base de données MongoDB
export const connect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1", {
        dbName: "AlbumsPhotos"    
    }).then(conn => {
        console.log("Connecté à MongoDB");
    }).catch(console.error);
};
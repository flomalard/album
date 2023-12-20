import mongoose from "mongoose";

const  AlbumSchema = new mongoose.Schema ({
    ref: String,
    name: String,
    description: String,
    picturesQuantity: Number,
    url: String
})

export const Album = mongoose.model(
    'Album',
    AlbumSchema
)
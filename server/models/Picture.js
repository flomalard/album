import mongoose from "mongoose";

const  PictureSchema = new mongoose.Schema ({
    albumRef: String,
    albumName: String,
    url: String
})

export const Picture = mongoose.model(
    'Picture',
    PictureSchema
)
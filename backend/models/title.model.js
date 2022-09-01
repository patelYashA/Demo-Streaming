const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const titleSchema = new Schema({
    title: String,
    description: String,
    programType: String,
    images: {
        posterArt: {
            url: String,
            width: Number,
            height: Number
        }
    },
    releaseYear: Number
})

const Title = mongoose.model("Title", titleSchema);

module.exports = Title;
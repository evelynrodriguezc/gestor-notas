const mongoose = require("mongoose") //se contecta con MongoDB
const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});
// le pide crearse una nueva base de datos tipo string y obligatoria

const Note = mongoose.model('Note', noteSchema)
module.exports = Note;


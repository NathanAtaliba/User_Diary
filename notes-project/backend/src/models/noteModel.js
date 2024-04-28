import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
    title: String,
    text: String,
    date: String
},
{ versionKey: false })

export default mongoose.model('Note', NoteSchema);
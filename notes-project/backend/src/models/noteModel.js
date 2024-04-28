import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    id_user: {
        type:String,
        required: true
    },
    text: {
        type:String,
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now }
},
{ versionKey: false })

export default mongoose.model('Note', NoteSchema);
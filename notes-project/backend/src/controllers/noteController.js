import noteModel from "../models/noteModel.js";

async function createNote( req, res ){
    try{
    const new_Note = req.body;
    await noteModel.create(new_Note);
    return res.status(201).send('Note created with success!');
    }catch(error){
        return res.status(404).send('Error creating note: '+ error);
    }
}

async function getNotes( req, res ){
    try {
        const id_user = req.params.id_user;
        const response = await noteModel.find({id_user:id_user});
        return res.status(200).send(response);
    } catch (error) {
        return res.status(404).send('Error: '+ error);
    }
}

async function updateNote( req, res ){
    try {
        const id = req.params.id;
        const text = req.body.text;
        await noteModel.findByIdAndUpdate({ _id:id },{text:text});
        return res.status(200).send('Successfully updated note');
    } catch (error) {
        return res.status(500).send('Error updatind note: ' + error);
    }
}


async function deleteNote( req,res ){
    try {
        const id = req.params.id;
        await noteModel.findByIdAndDelete({ _id:id});
        return res.status(200).send('Successfully deleted note');
    } catch (error) {
        return res.status(500).send('Error updating note: ' + error);
    }
}

export { createNote, getNotes, updateNote, deleteNote }
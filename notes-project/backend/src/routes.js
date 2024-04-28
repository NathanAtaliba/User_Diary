import { Router } from 'express';
import { createUser, getUser, loginUser, userDelete, userEdit } from './controllers/userController.js';
import { getNotes, createNote, updateNote, deleteNote } from './controllers/noteController.js';
const routes = Router();

//Routes for user
routes.get('/user/login/:id', getUser); 
routes.post('/user/login/', loginUser);
routes.post('/user/register/', createUser);
routes.delete('/user/delete/:id', userDelete);
routes.put('/user/edit/:id', userEdit);

//Routes for notes
routes.get('/notes/:id', getNotes); 
routes.delete('/note/:id', deleteNote);
routes.post('/note/', createNote);
routes.put('/note/:id', updateNote);



export default routes;
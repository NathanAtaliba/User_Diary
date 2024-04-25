import { Router } from 'express';
import { createUser, getUser, loginUser, userDelete, userEdit } from './controllers/userController.js';
const routes = Router();

routes.get('/user/login/:id', getUser); 
routes.post('/user/login/', loginUser);
routes.post('/user/register/', createUser);
routes.delete('/user/delete/:id', userDelete);
routes.put('/user/edit/:id', userEdit);

export default routes;
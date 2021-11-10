import express from 'express';
import { getstatus, addUser, getUserByid, editUser, deleteUser } from '../controller/controller.js';


const route = express.Router();

route.get('/', getstatus);
route.post('/add', addUser);
route.get('/:id', getUserByid);
route.put('/:id', editUser);
route.delete('/:id', deleteUser);
export default route;
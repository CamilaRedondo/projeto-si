import { Router } from "express";
import createUser from "./create-user.case";
import deleteUser from "./delete-user.case";
import allUsers from "./all-users.case";
import updateUser from "./update-user.case";
import findUser from "./find-user.case";

const user_router: Router = Router();

user_router.get('/all', allUsers);
user_router.get('/find/:id', findUser)
user_router.post('/create', createUser);
user_router.put('/update/:id', updateUser);
user_router.delete('/delete/:id', deleteUser)

export default user_router;
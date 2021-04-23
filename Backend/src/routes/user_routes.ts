import {Router} from 'express';
import {register} from '../controllers/user.controller';
import {getUsers} from '../controllers/user.controller';
import {editUsers} from '../controllers/user.controller';

const user_router = Router();

user_router.route('/users/register') //API Endpoint for Registering a user
    .post(register) // CREATE the user JSON object

user_router.route('/users/') //API Endpoint for Registering a user
    .post(getUsers) // CREATE the user JSON object

user_router.route('/users/user') //API Endpoint for Registering a user
    .put(editUsers) // CREATE the user JSON object

export default user_router;
import { ERROR_INSTANCES_MDDWR, ERROR_SERVER_MDDWR } from '../middlewares/error-responses';

import Route from 'express'
import loginRoute from './auth/login.routes';
import signUpRoute from './auth/signup.routes';
import userRoutes from './user/user.routes';

export const routesApp = Route();

routesApp.use('/auth/signin', loginRoute);
routesApp.use('/auth/signup', signUpRoute);
routesApp.use('/users', userRoutes);
//Manage Error Instances/Controllers
routesApp.use(ERROR_INSTANCES_MDDWR);
//Manage Internal Server Error
routesApp.use(ERROR_SERVER_MDDWR);


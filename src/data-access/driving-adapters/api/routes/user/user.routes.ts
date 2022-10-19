import Router from 'express'
import { VALIDATE_AUTENTICATION } from '../../middlewares/jwt-validator';
import { profileUserController } from '../../controllers';

const userRoutes = Router();

userRoutes.get('/profile', [VALIDATE_AUTENTICATION], profileUserController);

export default userRoutes;
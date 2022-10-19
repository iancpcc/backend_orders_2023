import { loginUserController, signUpController } from '../../controllers';

import { FIELDS_VALIDATOR_MIDDWR } from '../../middlewares/fields-validator';
import Router from 'express'
import { VALIDATION_MESSAGE } from '../../utils/ValidationMessages/validation-messages';
import { check } from 'express-validator';

const loginRoute = Router();

loginRoute.post('/', [
    check("email", VALIDATION_MESSAGE.email).isEmail(),
    check("password", VALIDATION_MESSAGE.password).isLength({ min: 8, max: 16 }),
    FIELDS_VALIDATOR_MIDDWR
], loginUserController);



export default loginRoute;
import { FIELDS_VALIDATOR_MIDDWR } from '../../middlewares/fields-validator';
import { Role } from '@entity/RoleEntity/index';
import Router from 'express'
import { VALIDATION_MESSAGE } from '../../utils/ValidationMessages/validation-messages';
import { check } from 'express-validator';
import { signUpController } from '../../controllers';

const signUpRoute = Router();

signUpRoute.post('/', [
    check("email", VALIDATION_MESSAGE.email).isEmail(),
    check("password", VALIDATION_MESSAGE.password).isLength({ min: 8, max: 16 }),
    check("role", VALIDATION_MESSAGE.role).optional({nullable:true}).isIn([Role.ADMIN_ROLE.toString(),Role.CUSTOMER_ROLE.toString()]),
    FIELDS_VALIDATOR_MIDDWR
], signUpController);





export default signUpRoute;
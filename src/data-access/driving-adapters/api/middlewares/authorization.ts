import { NextFunction, Request, Response } from 'express';

import { Role } from '@entity/RoleEntity/index';
import { UserException } from '@exception/UserException/index';

const validateRole = async( req: Request, res: Response, next: NextFunction) => {
    const { role } = req.body.payload
    try {
        if (role !== Role.ADMIN_ROLE) {
            throw new UserException("No tiene privilegios de administrador");
        }
        next();
    } catch (error) {
        next(error);
    }
};



export { validateRole as AUTHORIZE_TO_ADMIN }

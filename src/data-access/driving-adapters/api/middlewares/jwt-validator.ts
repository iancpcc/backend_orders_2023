import { Code, StatusCode } from '../models/status-code';
import { NextFunction, Request, Response } from 'express';

import { JWTException } from '../exceptions/JwtException';
import { JwtService } from '../utils/JwtService';

const validateJTW = async (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers.authorization
    try {
        if (bearerHeader == undefined) {
            throw new JWTException("Token faltante. Inicie sesión e intente nuevamente", Code.BAD_REQUEST, StatusCode.BAD_REQUEST);
        }

        const jwtService = new JwtService();
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        const payload = await jwtService.verifyToken(bearerToken);
        req.body.payload = payload;
        next();
    } catch (error) {
        next(error);
    }
};



export { validateJTW as VALIDATE_AUTENTICATION }

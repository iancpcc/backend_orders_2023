import { Code, StatusCode } from "../models/status-code";
import { NextFunction, Request, Response } from "express";

import { AuthException } from "@domain/exception/AuthException";
import { HttpResponse } from "../models/reponse.model";
import { JWTException } from '../exceptions/JwtException';
import { UserException } from '@exception/UserException/index';

const errorUserManage = (err: Error, req: Request, res: Response, next: NextFunction) => {

  
    if (err instanceof AuthException) {
        return res.status(Code.BAD_REQUEST).send(new HttpResponse(Code.BAD_REQUEST, StatusCode.BAD_REQUEST, err.message));
    }
    if (err instanceof UserException) {
        return res.status(Code.BAD_REQUEST).send(new HttpResponse(Code.BAD_REQUEST, StatusCode.BAD_REQUEST, err.message));
    }

    if (err instanceof JWTException) {
        return res.status(Code.BAD_REQUEST).send(new HttpResponse(err.code, err.httpStatus, err.message));
    }
    next(err)
}

const errorServer = (err: Error, req: Request, res: Response) => {
    return res.status(Code.INTERNAL_SERVER_ERROR).send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_SERVER_ERROR, err.message));
}

export { errorUserManage as ERROR_INSTANCES_MDDWR, errorServer as ERROR_SERVER_MDDWR }
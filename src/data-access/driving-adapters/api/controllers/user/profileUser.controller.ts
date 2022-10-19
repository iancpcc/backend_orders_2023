import { Code, StatusCode } from '../../models/status-code';
import { NextFunction, Request, Response } from "express";

import { HttpResponse } from '../../models/reponse.model';
import { MysqlUserRepository } from '@data-access/implementations/DB/Mysql/MysqlUserRepository';
import { UserUseCase } from '@usecases/UserUseCase/index';

export const profileUser = async (req: Request, res: Response, next: NextFunction) => {
    const MESSAGE = "Información obtenida exitosamente";
    try {
        const { id } = req.body.payload;
        const userRepository = new MysqlUserRepository();
        const userUseCase = new UserUseCase(userRepository);
        const user = await userUseCase.findUser(id);
        return res.json(new HttpResponse(Code.OK, StatusCode.OK, MESSAGE, { user }))
        
    } catch (error) {
       
        next(error);
    }


}
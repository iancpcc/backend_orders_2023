import { Code, StatusCode } from "../../models/status-code";
import { NextFunction, Request, Response } from "express";

import { AuthUseCase } from "@usecases/AuthUseCase";
import { BcryptService } from '../../utils/BcryptService/index';
import { HttpResponse } from "../../models/reponse.model";
import { JwtService } from '../../utils/JwtService/index';
import { MysqlUserRepository } from "@implementations/DB/Mysql/MysqlUserRepository";
import { OneSignalService } from '../../utils/OneSignalService/index';
import { UserEntity } from "@entity/UserEntity";
import { UserValue } from '@entity/UserEntity/index';

export const signUpUser = async (req: Request, res: Response, next: NextFunction) => {
    const SIGN_UP_SUCCESS = "Sign Up Success"

    try {
        const userBody: UserEntity = new UserValue(req.body);

        const userUserCase = new MysqlUserRepository();

        const auth = new AuthUseCase({
            userRepository: userUserCase,
            criptoRepository: new BcryptService(),
            notifyRepository: new OneSignalService(),
            tokenRepository: new JwtService()
        });

        const userCreated = await auth.signUpAndNotify(userBody);
        return res.json(new HttpResponse(Code.CREATED, StatusCode.CREATED, SIGN_UP_SUCCESS, { user: userCreated }));

    } catch (error) {
        next(error);
    }


}
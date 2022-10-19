import { Code, StatusCode } from '../../models/status-code';
import { NextFunction, Request, Response } from "express";

import { AuthUseCase } from "@usecases/AuthUseCase";
import { BcryptService } from '../../utils/BcryptService/index';
import { HttpResponse } from '../../models/reponse.model';
import { JwtService } from '../../utils/JwtService/index';
import { MysqlUserRepository } from "@implementations/DB/Mysql/MysqlUserRepository";
import { OneSignalService } from '../../utils/OneSignalService/index';
import { UserEntity } from "@entity/UserEntity";

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const LOGIN_SUCCESS = "Authentication success";
    try {
        const userBody: UserEntity = req.body;

        const userUserCase = new MysqlUserRepository();

        const auth = new AuthUseCase({
            userRepository: userUserCase,
            criptoRepository: new BcryptService(),
            notifyRepository: new OneSignalService(),
            tokenRepository: new JwtService()
        });

        const accessToken = await auth.loginWithCredentials(userBody.email!, userBody.password!);
        return res.json(new HttpResponse(Code.OK, StatusCode.OK, LOGIN_SUCCESS, {accessToken}));

    } catch (error) {
        next(error);
    }


}
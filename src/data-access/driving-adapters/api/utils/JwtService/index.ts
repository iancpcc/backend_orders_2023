import jwt, { JwtPayload } from 'jsonwebtoken'

import { IToken } from '@service/utils/IToken/index';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config(
    { path: path.resolve(__dirname, '../../../../.env') }
);

export class JwtService implements IToken {

    private readonly PRIVATE_KEY: string = process.env.SECRET_PRIVATE_KEY || "";

    async verifyToken(token: string): Promise<string | JwtPayload> {
       
        return jwt.verify(token, this.PRIVATE_KEY);
    }

    async createToken(payload: {}): Promise<string> {
        return jwt.sign(payload, this.PRIVATE_KEY);
    }
    async createTokenByTime(payload: {}, expiresIn: string): Promise<string> {
        return jwt.sign(payload, this.PRIVATE_KEY);
    }

}
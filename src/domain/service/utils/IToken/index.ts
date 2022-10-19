import { JwtPayload } from "jsonwebtoken";

export interface IToken {
    verifyToken(token: string): Promise<string | JwtPayload>;
    createToken(payload: {}): Promise<string>;
    createTokenByTime(payload: {}, expiresIn: string): Promise<string>;
}
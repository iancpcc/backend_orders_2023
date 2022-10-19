import { Code, StatusCode } from '../models/status-code';

export class JWTException extends Error {
    code:Code;
    httpStatus:StatusCode;
    constructor(message: string,  code: Code,  httpStatus: StatusCode) {
        super(message)
        this.code = code;
        this.httpStatus = httpStatus
    }
}
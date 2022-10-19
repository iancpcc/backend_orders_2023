import { Code, StatusCode } from '../models/status-code';
import { NextFunction, Request, Response } from 'express';

import { HttpResponse } from '../models/reponse.model';
import { validationResult } from 'express-validator'

const validator = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req).array({ onlyFirstError: true });
  if (errors.length > 0) {
    return res.status(Code.BAD_REQUEST).json(new HttpResponse(Code.BAD_REQUEST, StatusCode.BAD_REQUEST, "Validation Failed", errors[0]));
  }
  next();
};

export {validator as FIELDS_VALIDATOR_MIDDWR}


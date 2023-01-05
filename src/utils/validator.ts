import Ajv, { Schema } from 'ajv';
import addFormats from 'ajv-formats';
import { NextFunction, Request, Response } from 'express';

export const validator = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
  const validate = addFormats(new Ajv({ allErrors: true })).compile(schema);

  if (validate(req.body)) {
    return next();
  }

  console.log(validate.errors?.map(({ message }) => message));

  res.status(400).json({ message: 'Validation error.' });
};

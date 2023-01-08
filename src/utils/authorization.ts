import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { keyStorage } from './keyStorage.js';

export const authorization = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-token'];

  if (!token) {
    return res.status(403).json({ message: 'Token not found' });
  }

  if (typeof token === 'string') {
    try {
      const verify = jwt.verify(token, keyStorage.getKey(token));
      console.log(verify);
      next();
    } catch ({ message }) {
      return res.status(403).json({ message });
    }
  } else {
    return res.status(403).json({ message: 'Token not found' });
  }
};

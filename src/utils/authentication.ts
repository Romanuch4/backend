import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { createPrivateKey } from 'pem';

import { keyStorage } from './keyStorage.js';

const users = [{ email: 'roman@gmail.com', password: 'qwerty123456' }];

export const auth = (req: Request, res: any, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ message: 'Credentials are not valid' });
    return;
  }

  const [, credentials] = authorization.split(' ');

  const [email, password] = Buffer.from(credentials, 'base64').toString().split(':');

  const currUser = users.find((user) => user.email === email);

  if (!currUser) {
    res.status(401).json({ message: 'Credentials are not valid' });
    return;
  }

  createPrivateKey({ cipher: 'aes256', password: 'qwerty' }, (err, keys) => {
    if (err) {
      res.status(401).json({ message: err.message });
    }
    const key = keys.key;

    if (currUser.password === password) {
      const token = jwt.sign({ role: 'admin' }, key, { algorithm: 'RS256' });
      res['token'] = token;
      keyStorage.save({ token, key });
      return next();
    }
  });
};

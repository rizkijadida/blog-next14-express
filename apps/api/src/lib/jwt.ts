import { JWT_SECRET } from '@/config';
import { NextFunction, Request, Response } from 'express';
import { TokenExpiredError, verify } from 'jsonwebtoken';

interface PayloadToken {
  id: number;
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(400).send({
      message: 'token is missing',
    });
  }

  verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      if (err instanceof TokenExpiredError) {
        return res.status(403).send({ message: 'token expired' });
      } else {
        return res.status(403).send({ message: 'unauthorization' });
      }
    }

    req.body.user = payload as PayloadToken;

    next();
  });
};

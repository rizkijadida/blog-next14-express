import { forgotPasswordService } from '@/services/auth/forgot-password.service';
import { KeepLoginService } from '@/services/auth/keep-login';
import { loginService } from '@/services/auth/login.service';
import { registerService } from '@/services/auth/register.service';
import { resetPasswordService } from '@/services/auth/reset-password.service';
import { NextFunction, Request, Response } from 'express';

export class AuthController {
  async registerController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await registerService(req.body);

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async loginController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await loginService(req.body);

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async forgotPasswordController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await forgotPasswordService(req.body.email);

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async resetPasswrodController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const userId = Number(req.body.user.id);
   

      const result = await KeepLoginService(userId);

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async keepLoginController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const userId = Number(req.body.user.id);
      

      const result = await KeepLoginService(userId);

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
